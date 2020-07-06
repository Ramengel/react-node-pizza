import {
    ADD_NOTIFIER,
    REMOVE_NOTIFIER
} from '../../actions/actionTypes';
import * as R from 'ramda';

const initialState: [] = []

export default (state = initialState, {type, payload}: any) => {
    switch(type) {
        case ADD_NOTIFIER:
            const id: number = Math.round(Math.random() * 10000000)
            return [
                ...state,
                {
                    id,
                    text: payload.text,
                    type: payload.type,
                }
            ]
        case REMOVE_NOTIFIER:
            const arr = state.filter((notify: any) => {
                if(notify.id !== payload) return notify;
            });

            return arr || [];
        default:
            return state;
    }
}