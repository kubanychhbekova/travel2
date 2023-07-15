const initialState = {
    popular:[],
    product: [],
    cards:[],
    hotelsCard: JSON.parse(localStorage.getItem("hotelsCard")) || [],
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            return { ...state, product: action.payload };
        case "GET_POPULAR":
            return { ...state, popular: action.payload };
        case "GET_CARDS":
            const found = state.popular.find((el) => el.id === action.payload);
            return { ...state, cards:[ { ...found}]};
        case "GET_HOTELS":
            const foundHotel = state.product.find((el) => el.id === action.payload);
            return { ...state, hotelsCard: [{ ...foundHotel}] };
        default:
            return state;
    }
};