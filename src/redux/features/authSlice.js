import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status:false,
  userData:null,
};
const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUsers: (state, action) => {
      state.status=true,
      state.userData=action.payload
    },
    logoutUser: (state,action) => {
      state.status=false,
      state.userData=null;
    },
  },
});
export const {loginUsers,logoutUser}=authSlice.actions;
export default authSlice.reducer;