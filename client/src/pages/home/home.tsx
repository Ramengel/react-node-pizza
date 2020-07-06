import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../../components/sidebar'
import { fetchPizzas, addPizzaToBasket } from '../../actions';
import { getPizzas } from '../../selectors';
import * as R from 'ramda';
import './home.css';

const Home = ({ pizzas, fetchPizzas, addPizzaToBasket }: any) => {

    useEffect(() => {
        const getPizzas = async () => {
            await fetchPizzas();
        }
        getPizzas();
    }, [fetchPizzas])

    const renderPizza = (pizza: any) => {
        const description = `${R.take(40, pizza.description)}...`;
        return(
            <div className="col-sm-4" key={pizza.id}>
                <div className="card card-pizza" >
                    <div className="card-pizza-image">
                        <img src={pizza.image} className="card-img-top" alt="img" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">{pizza.name}</p>
                        <p className="card-text">{description}</p>
                        <p className="card-text">цена: ${pizza.dollar} / €{pizza.euro}</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => addPizzaToBasket(pizza.id)}
                            >КУПИТЬ!</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="home-page">
            <div className="row">
                <div className="col-sm-2">
                    <Sidebar />
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        {pizzas.map((pizza: any) => renderPizza(pizza))}
                    </div>
                </div>
            </div>
        </div>

    );
}

const mapStateToPropsstate = (state: any) => ({
    pizzas: getPizzas(state)
})

const mapDispatchToProps = {
    fetchPizzas,
    addPizzaToBasket
}

export default connect(mapStateToPropsstate, mapDispatchToProps)(Home)