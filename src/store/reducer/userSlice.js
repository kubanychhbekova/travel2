import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: JSON.parse(localStorage.getItem("email")) || null,
        token: JSON.parse(localStorage.getItem("token")) || null,
        id: JSON.parse(localStorage.getItem("id")) || null,
        name: JSON.parse(localStorage.getItem("name")) || null,
        userImage: localStorage.getItem("userImage") || null, // Store the image data as a string
    },
    reducers: {
        setUser(state, action) {
            const { email, token, id, name, userImage } = action.payload;

            state.email = email;
            state.token = token;
            state.id = id;
            state.name = name;
            state.userImage = userImage;

            localStorage.setItem("email", JSON.stringify(email));
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("id", JSON.stringify(id));
            localStorage.setItem("name", JSON.stringify(name));
            // Don't stringify userImage as it's already a string
            localStorage.setItem("userImage", userImage);
        },
        removeUser(state, action) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.name = null;
            state.userImage = null;
            localStorage.removeItem("email");
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            localStorage.removeItem("name");
            localStorage.removeItem("userImage");
        },
        updateName(state, action) {
            state.name = action.payload;
            localStorage.setItem("name", JSON.stringify(action.payload));
        },
        updateEmail(state, action) {
            state.email = action.payload;
            localStorage.setItem("email", JSON.stringify(action.payload));
        },
        updateUserImage(state, action) {
            state.userImage = action.payload;
            localStorage.setItem("userImage", action.payload);
        },
    },
});

export const {
    setUser,
    removeUser,
    updateName,
    updateEmail,
    updateUserImage,
} = userSlice.actions;

export default userSlice.reducer;
