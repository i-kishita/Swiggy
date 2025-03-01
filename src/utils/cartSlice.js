import{createSlice} from '@reduxjs/toolkit' 

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ["pizza"]
    },
    reducers:{
        // addItem is action and ()=>{is a function}
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length = 0;
        },
    },
});
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;