
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import {
    getBasketPizzasWithCount,
    getTotalBasketPrice,
    getPizzaJson
} from '../../selectors'
import {
    removePizzaFromBasket, clearBasket,
    increaseTheGoodsCountById,
    decreaseTheGoodsCountById,
    addNotify
} from '../../actions'
import * as R from 'ramda';
import useFetch from "../../hooks/hook-fetch";
import './basket.css'

const Basket = ({
    pizzas,
    totalBusketPrice,
    removePizzaFromBasket,
    pizzasJson,
    clearBasket,
    increaseTheGoodsCountById,
    addNotify,
    decreaseTheGoodsCountById }: any) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const deliveryInDollar = 4;
    const deliveryInEuro = 4;
    const { isLoading, response, doFetch, error } = useFetch();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = { name, address, jsonData: [...pizzasJson], totalPriceDollar: totalPriceInDollar + deliveryInDollar, totalPriceEuro: totalPriceInEuro + deliveryInEuro }
        setName("");
        setAddress("");
        clearBasket();
        addNotify('Заказ принят', 'success');

        doFetch('/api/order/makeOrder', {
            method: "post",
            data
        });
    };

    useEffect(() => {
        if (!error) return;
        addNotify(error, 'danger');
    }, [error])

    useEffect(() => {
        if (!error && response) {
            setName("");
            setAddress("");
            clearBasket();
        }
    }, [clearBasket, setName, setAddress, error, response])

    const buttonIncrease = (event: React.MouseEvent, id: any) => {
        event.preventDefault();

        increaseTheGoodsCountById(id);
    }

    const inputHandle = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
    }

    const buttonDecrease = (event: React.MouseEvent, id: any) => {
        event.preventDefault();
        decreaseTheGoodsCountById(id)
    }

    if (R.isEmpty(pizzas)) return <div className="basket-is-empty">Корзина пуста</div>
    const { totalPriceInDollar, totalPriceInEuro } = totalBusketPrice;
    return (
        <>
            <div className="basket-table">
                <table className="table table-striped">
                    <tbody>
                        {pizzas.map((pizzas: any, index: any) => (
                            <tr
                                key={index}
                            >
                                <td className='first-column-checkout'>
                                    <img
                                        className='img-thumbnail'
                                        src={pizzas.image}
                                        alt={pizzas.name}
                                    />
                                </td>
                                <td>{pizzas.name}</td>
                                <td>
                                    <div className="input-spinner">
                                        <button
                                            className="btn btn-danger input-spinner-plus"
                                            onClick={(event: React.MouseEvent) => buttonDecrease(event, pizzas.id)}
                                        > - </button>
                                        <input type="number" className="input-spinner-input" value={pizzas.count} onChange={inputHandle} />
                                        <button
                                            className="btn btn-danger input-spinner-minus"
                                            onClick={(event: React.MouseEvent) => buttonIncrease(event, pizzas.id)}
                                        > + </button>
                                    </div>
                                </td>
                                <td>
                                    <span
                                        onClick={() => removePizzaFromBasket(pizzas.id)}
                                        className='delete-pizza'
                                    >x</span>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2} className='first-column-checkout'>
                                доставка
                            </td>
                            <td colSpan={2} >$4 / €3</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-right basket-total-price">
                    Общая цена c доставкой - ${totalPriceInDollar + deliveryInDollar} / €{totalPriceInEuro + deliveryInEuro}
                </div>
            </div >

            <div className="auth-block">
                <h1 className="text-center">Форма заказа</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Имя</span>
                            </div>
                            <input
                                placeholder="Имя"
                                id="name"
                                type="text"
                                name="name"
                                required
                                className="form-control"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Адрес</span>
                            </div>
                            <input
                                placeholder="Адрес"
                                id="adrress"
                                type="text"
                                required
                                name="adrress"
                                className="form-control"
                                onChange={e => setAddress(e.target.value)}
                            />
                        </div>
                        <button
                            disabled={isLoading}
                            className="btn btn-primary"
                            type="submit"
                        >
                            Заказать
                </button>
                    </div>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    pizzasJson: getPizzaJson(state),
    pizzas: getBasketPizzasWithCount(state),
    totalBusketPrice: getTotalBasketPrice(state),
})

const mapDispatchToProps = {
    removePizzaFromBasket,
    clearBasket,
    increaseTheGoodsCountById,
    addNotify,
    decreaseTheGoodsCountById
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);