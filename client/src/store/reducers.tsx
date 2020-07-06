import { combineReducers } from 'redux';
import pizzaRudecer from './pizza-reducer';
import homePage from './home-page';
import basket from './basket';
import notifier from './notifier';

export default combineReducers({
    homePage,
    basket,
    notifier,
    pizzas: pizzaRudecer
})