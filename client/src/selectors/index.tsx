import * as R from 'ramda';

const getPizzaById = (state: any, id: number) => R.prop(id, state.pizzas)

export const getPizzas = (state: any) => R.map(id => getPizzaById(state, id), state.homePage.ids).filter((pizza: any) => R.contains(state.homePage.search, pizza.name));

export const getPizzaJson = (state: any) =>
    state.basket.map((id: number) => {
        const pizza = getPizzaById(state, id)
        return {
            dollar: pizza.dollar,
            euro: pizza.euro,
            name: pizza.name
        };
    })

export const getTotalBasketCount = (state: any) => R.length(state.basket)

export const getBasketPizzasWithCount = (state: any) => {
    const uniqeIds = R.uniq(state.basket);
    const pizzaCount = (id: any) => state.basket.filter((basketId: any) => basketId === id).length

    const pizzaWithCount = (pizza: any) => R.assoc('count', pizzaCount(pizza.id), pizza)

    const pizzas = R.compose(
        R.map(pizzaWithCount),
        R.map((id: any) => getPizzaById(state, id))
    )(uniqeIds)

    return pizzas;
}

export const getBasketPizzaCount = (state: any) => {

    return (id: any) => {
        const pizzaCount = state.filter((basketId: any) => basketId === id)
    
        return pizzaCount.length;
    }

}

export const getTotalBasketPrice = (state: any) => {
    const totalPriceInDollar = R.compose(
        R.sum,
        R.pluck('dollar'),
        R.map((id: number) => getPizzaById(state, id))
    )(state.basket)
    const totalPriceInEuro = R.compose(
        R.sum,
        R.pluck('euro'),
        R.map((id: number) => getPizzaById(state, id))
    )(state.basket)

    return { totalPriceInDollar, totalPriceInEuro }
}