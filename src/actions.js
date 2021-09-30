import * as actions from './actionTypes';

export function productAdded(id) {
    return {
        type: actions.ADDED_TO_CART,
        item: {
            id: id
        }
    }
};

export function productRemoved(id) {
    return {
        type: actions.REMOVED_FROM_CART,
        item: {
            id: id,
        }
    }
}