import React, { useEffect } from "react";
import useFetch from "../../hooks/hook-fetch";
import './history.css'

const History = () => {
    const { isLoading, response, doFetch } = useFetch();

    useEffect(() => {
        doFetch('/api/order/get-orders');
    }, [doFetch])

    if (isLoading || !response) return <div>Loading...</div>

    return (
        <div className="auth-block">
            <h1 className="text-center">История</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Адрес</th>
                        <th scope="col">Pаказ</th>
                        <th scope="col">Общая сумма</th>
                    </tr>
                </thead>
                <tbody>
                    {response.map((order: any, index: number) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{order.name}</td>
                                <td>{order.address}</td>
                                <td className="table-total-sum-td">{order.jsonData.map((pizza: any) => {
                                    return (
                                        <div className="table-total-sum">
                                            <p>Пицца - {pizza.name}</p>
                                            <p>ценна - ${pizza.dollar} / €{pizza.euro}</p>
                                        </div>
                                    );
                                }
                                )}</td>
                                <td>${order.totalPriceDollar} / €{order.totalPriceEuro}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default History;
