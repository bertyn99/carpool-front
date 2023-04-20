import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICredentials, ITokens, IUser } from "@/types/types";
export interface userState {
  user: IUser | null;
  token: ITokens | null;
}
const initialState: userState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<ICredentials>) => {
      const { tokens, ...rest } = action.payload;
      state.user = rest;
      state.token = tokens;
    },
    setToken: (state, action: PayloadAction<ITokens>) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, setToken, logOut } = userSlice.actions;

export default userSlice.reducer;
