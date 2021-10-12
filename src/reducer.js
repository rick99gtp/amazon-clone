const initialState = {
    items: [],
    user: null
};

export const getCartTotal = cart =>
    cart.items?.reduce((amount, item) => item.price + amount, 0);

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
                console.warn(`Cant remove product (id: ${action.id}) as its not in the cart!`)
            }

            return {
                ...state,
                items: newItems
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;
