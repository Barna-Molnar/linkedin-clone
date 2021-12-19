import { createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
  name: 'user ',
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },

});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

export const setProgressBar = (isOpen) => (
  {
   type: 'SET_PROGRESS_BAR',
   isOpen: isOpen
  });

  export const ui = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PROGRESS_BAR':
        return Object.assign({}, state, { progressBarStatus: action.isOpen });
  
    default:
     return state;
   }
  };