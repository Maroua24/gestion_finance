// src/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { logIn } from '../API/Log_in_API';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logIn.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logIn.fulfilled, (state) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.error = null;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.message || 'Failed to log in';
            });
    },
});

export default authSlice.reducer;
