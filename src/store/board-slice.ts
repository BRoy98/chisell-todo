import { createSlice } from "@reduxjs/toolkit";

export type BoardState = {
  boards: Array<{
    id: number;
    name: string;
  }>;
  status: "pending" | "loading" | "idle";
};

const initialState: BoardState = {
  boards: [],
  status: "pending",
};

export const counterSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
  },
});

export const { setBoards } = counterSlice.actions;
export default counterSlice.reducer;
