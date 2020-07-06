const { Order } = require('../models/order');
const { User } = require('../models/auth');
const { UserOrder } = require('../models/user-order');
const jwt = require("jsonwebtoken");

module.exports = {
    getOrders: async (req, res) => {
        try {
            await User.findOne({ where: { id: req.user.userId } })
                .then(user => {
                    if (!user) return;

                    user.getOrders().then((orders) => {
                        const data = orders ? orders : {}
                        res.status(200).json([ ...data ]);
                    });
                }).catch(err => console.log(err));
        } catch (e) {
            return res.status(503).json({
                message: "ERROR"
            });
        }

    },

    makeOrder: async (req, res) => {
        try {

            const { name, jsonData, address, totalPriceDollar, totalPriceEuro } = req.body;

            const order = await Order.create({
                name, jsonData, address, totalPriceDollar, totalPriceEuro
            }).then(async (order) => {
                if (!order) return;

                if (req.user) {
                    await User.findOne({ where: { id: req.user.userId } })
                        .then(user => {
                            if (!user) return;

                            user.addOrder(order);
                        }).catch(err => console.log(err));
                }

                return order;
            }).catch((err) => console.log(err));
            console.log('User2')

            if (order)
                return res.status(201).json({
                    message: "order accepted"
                });
            console.log('User3')

            return res.status(503).json({
                message: "ERROR"
            });
        } catch (e) {
            return res.status(503).json({
                message: "ERROR"
            });
        }
    }
};