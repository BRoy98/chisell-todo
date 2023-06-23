import { createSlice } from "@reduxjs/toolkit";

export type BoardState = {
  boards: Array<{
    id: number;
    name: string;
  }>;
};

const initialState: BoardState = {
  boards: [],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
  },
});

export const { setBoards } = boardSlice.actions;
export default boardSlice.reducer;
