const { User } = require('../models/auth');
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = {

    check: async (req, res) => {
        const user = await User.findOne({ where: { id: req.user.userId } })
            .then(user => {
                if (!user) return;
                return user;
            }).catch(err => console.log(err));

        const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
            expiresIn: "240h"
        });
        
        res.status(201).json({
            message: "token was updated",
            user: { token: req.token, userId: user.id }
        });

    },


    login: async (req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } })
            .then(user => {
                if (!user) return;
                return user;
            }).catch(err => console.log(err));

        if (!user)
            return res.status(400).json({ message: "User does not exists" });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
            return res.status(400).json({ message: "Wrong email or password" });

        const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
            expiresIn: "240h"
        });

        return res.status(201).json({
            message: "Loged in",
            user: { token, userId: user.id, username: user.username }
        });
    },

    registration: async (req, res) => {
        const { email, password } = req.body;

        const isEmailExists = await User.findOne({ where: { email } })
            .then(user => {
                if (!user) return;
                return user;
            }).catch(err => console.log(err));

        if (isEmailExists) return res.status(400).json({ message: "Email already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            email,
            password: hashedPassword
        }).then((res) => res).catch((err) => console.log(err));

        const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
            expiresIn: "240h"
        });

        return res.status(201).json({
            message: "User was created",
            user: { token, userId: user.id, username: user.username }
        });
    },
};