import {
    ADD_PIZZA_TO_BASKET,
    REMOVE_PIZZA_FROM_BASKET,
    CLEAR_BASKET,
    INCREASE_THE_GOODS_COUNT_BY_ID,
    DECREASE_THE_GOODS_COUNT_BY_ID
} from '../../actions/actionTypes';
import * as R from 'ramda';

const initialState: [] = []

export default (state = initialState, { type, payload }: any) => {
    switch (type) {
        case ADD_PIZZA_TO_BASKET:
            return R.append(payload, state);
        case REMOVE_PIZZA_FROM_BASKET:
            return R.without([payload], state);
        case CLEAR_BASKET:
            return [];
        case INCREASE_THE_GOODS_COUNT_BY_ID:
            return R.append(payload, state);
        case DECREASE_THE_GOODS_COUNT_BY_ID:
            const pizzaIndex = R.indexOf(payload, state)
            const arr = R.remove(pizzaIndex, 1, state)

            return arr
        default:
            return state
    }
}