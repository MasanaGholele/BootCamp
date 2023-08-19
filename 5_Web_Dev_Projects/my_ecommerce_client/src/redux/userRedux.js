import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        addUserStart: (state) => {
            state.isFetching = true;
        },
        addUserSuccess: (state) => {
            state.isFetching = false;
            state.error = false;
        },
        addUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        logoutStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        logoutSuccess: (state) => {
            state.isFetching = false;
            state.error = false;
            state.currentUser = null;
        },
        logoutFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const {
    loginStart, loginSuccess, loginFailure,
    logoutStart, logoutSuccess, logoutFailure,
    addUserStart, addUserSuccess, addUserFailure
} = userSlice.actions;
export default userSlice.reducer;