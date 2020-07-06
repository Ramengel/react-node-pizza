import {
    FETCH_PIZZAS_SUCCESS,
    SEARCH_PIZZA
} from '../../actions/actionTypes';
import * as R from 'ramda';

const initialStte = {
    ids: [],
    search: ''
}

export default (state = initialStte, { type, payload }: any) => {
    switch (type) {
        case FETCH_PIZZAS_SUCCESS:
            const idp = R.pluck('id')
            return R.merge(state, {
                ids: idp(payload)
            })
        case SEARCH_PIZZA:
            return R.merge(state, {
                search: payload
            })

        default:
            return state
    }
}