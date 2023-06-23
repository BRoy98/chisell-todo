import { createSlice } from "@reduxjs/toolkit";

export type TaskState = {
  tasks: {
    [boardId: string]: Array<{
      id: number;
      name: string;
      state: "PENDING" | "COMPLETE";
    }>;
  };
};

const initialState: TaskState = {
  tasks: {},
};

export const counterSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = {
        ...state.tasks,
        [action.payload.boardId]: action.payload.tasks,
      };
    },
  },
});

export const { setTasks } = counterSlice.actions;
export default counterSlice.reducer;
