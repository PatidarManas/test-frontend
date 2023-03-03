import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {},
  {
    userRequest:(state,action) => {
      state.loading = true;
      // state.user = action.payload.user;
    },
    userSuccess:(state, action) => {
      state.loading = false;
      state.user= action.payload;
        state.message = action.payload.message;
    },
    userFail:(state, action) => {
      state.loading = false;
        state.message = action.payload.message;
    state.error = action.payload.error;
    },
    createRequest:(state) => {
      state.loading = true;
    },
    createSuccess:(state, action) => {
      state.loading = false;
        state.message = action.payload.message;
        state.user = action.payload.user;
        
    },
    createFail:(state, action) => {
      state.loading = false;
        state.message = action.payload.message;
    state.error = action.payload.error;
    },
    deleteRequest:(state) => {
      state.loading = true;
    },
    deleteSuccess:(state, action) => {
      state.loading = false;
        state.message = action.payload.message;
        state.user = action.payload.user;
        
    },
    deleteFail:(state, action) => {
      state.loading = false;
        state.message = action.payload.message;
    state.error = action.payload.error;
    },

  }
);
