const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case "REMOVE_FROM_CART":
            return state.filter(product => product.id !== action.id)
        default:
            return state;
    }
}

export default reducer;
