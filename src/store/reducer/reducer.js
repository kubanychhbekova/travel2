import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "travel",
    initialState: {
        popular: [],
        product: [],
        cards: [],
        hotelsCard: JSON.parse(localStorage.getItem("hotelsCard")) || [],
    },
    reducers: {
        getProduct(state, action) {
            state.product = action.payload;
        },
        getPopular(state, action) {
            state.popular = action.payload;
        },
        getCards(state, action) {
            const found = state.popular.find((el) => el.id === action.payload);
            state.cards = [{ ...found }];
        },
        getHotels(state, action) {
            const foundHotel = state.product.find((el) => el.id === action.payload);
            state.hotelsCard = [{ ...foundHotel }];
        },
    },
});

export const { getProduct, getPopular, getCards, getHotels } = todoSlice.actions;
export default todoSlice.reducer;
