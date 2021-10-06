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
            const index = state.items.findIndex(
                item => item.id === action.id
            );
            let newItems = [...state.items];

            if(index >= 0) {
                newItems.splice(index, 1);
            }
            else {
                console.warn('Cant remove product (id: ${action.id}) as its not in the cart!')
            }

            return {
                ...state,
                items: newItems
            }
        default:
            return state;
    }
}

export default reducer;
