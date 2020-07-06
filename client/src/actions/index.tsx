import {
    FETCH_PIZZAS_FAILUER,
    FETCH_PIZZAS_START,
    FETCH_PIZZAS_SUCCESS,
    ADD_PIZZA_TO_BASKET,
    SEARCH_PIZZA,
    REMOVE_PIZZA_FROM_BASKET,
    CLEAR_BASKET,
    INCREASE_THE_GOODS_COUNT_BY_ID,
    DECREASE_THE_GOODS_COUNT_BY_ID,
    ADD_NOTIFIER,
    REMOVE_NOTIFIER
} from './actionTypes'

import { fetchPizzasApi } from '../api/pizza-api';

export const addPizzaToBasket = (id: number) => (dispatch: any) => {
    dispatch({type: ADD_PIZZA_TO_BASKET, payload: id});
}

export const searchPizza = (id: number) => (dispatch: any) => {
    dispatch({type: SEARCH_PIZZA, payload: id});
}

export const increaseTheGoodsCountById = (id: number) => (dispatch: any) => {
    dispatch({type: INCREASE_THE_GOODS_COUNT_BY_ID, payload: id});
}

export const decreaseTheGoodsCountById = (id: number) => (dispatch: any) => {
    dispatch({type: DECREASE_THE_GOODS_COUNT_BY_ID, payload: id});
}

export const clearBasket = (id: number) => (dispatch: any) => {
    dispatch({type: CLEAR_BASKET });
}

export const removePizzaFromBasket = (id: number) => (dispatch: any) => {
    dispatch({type: REMOVE_PIZZA_FROM_BASKET, payload: id});
}

export const addNotify = (text: string, type: string) => (dispatch: any) => {
    dispatch({type: ADD_NOTIFIER, payload: {
        text, type
    }});
}

export const removeNotify = (id: any) => (dispatch: any) => {
    dispatch({type: REMOVE_NOTIFIER, payload: id});
}

export const fetchPizzas = () => async (dispatch: any) => {
    dispatch({type: FETCH_PIZZAS_START});

    try {
        const pizzas = await fetchPizzasApi('/api/pizza');

        dispatch({
            type: FETCH_PIZZAS_SUCCESS,
            payload: pizzas.data
        })
    } catch(err) {
        console.log('err', err)
        dispatch({
                type: FETCH_PIZZAS_FAILUER,
                payload: err,
                error: true
            });
    }

}