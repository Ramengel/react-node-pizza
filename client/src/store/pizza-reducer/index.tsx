import {
    FETCH_PIZZAS_SUCCESS
} from '../../actions/actionTypes';
import * as R from 'ramda';

const initialState = {}

export default (state = initialState, {type, payload}: any) => {
    switch(type) {
        case FETCH_PIZZAS_SUCCESS:
            const nv = R.indexBy<any>(R.prop('id'), payload);
            return R.merge(state, nv);
        default:
            return state;
    }
}