export const initialState = {
    items: [],
    totalAmount: 0,
}

export const CartReducer = (state, action) => {
    const { type, payload } = action;
    let index = -1;

    switch (type) {
        case "ADD_TO_CART":
            index = state.items.findIndex(item => item.id === payload.item_id);
            if (index === -1) {
                state.items.push({
                    id: payload.item_id,
                    quantity: 1
                })
                state.totalAmount += payload.price
            }
            else {
                state.items[index].quantity += 1;
                state.totalAmount += payload.price;
            }

            return {
                ...state
            }

        case "REMOVE_FROM_CART":
            index = state.items.findIndex(item => item.id === payload.item_id);
            if (index !== -1) {
                if(state.items[index].quantity === 1){
                    state.items.splice(index, 1);
                }
                else
                    state.items[index].quantity -= 1;

                state.totalAmount -= payload.price;
            }

            return {
                ...state
            }
        
        case "CLEAR_CART":
            return {
                items: [],
                totalAmount: 0
            }

        default:
            throw new Error("Invalid operation");

    }
}