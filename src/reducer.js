const initialState = {
    items: [{
        id: '1',
        title: 'test item',
        price: '29.99',
        image: 'test image',
        stars: '5',
    }]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case "REMOVED_FROM_CART":
            return state.filter(product => product.id !== action.id)
        default:
            return state;
    }
}

export default reducer;
