import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import {
  fetchBoardsSaga,
  createBoardsSaga,
  deleteBoardsSaga,
} from "./sagas/board-saga";
import boardReducer from "./slices/board-slice";
import taskReducer from "./slices/task-slice";
import {
  completeTasksSaga,
  createTasksSaga,
  deleteTasksSaga,
  fetchTasksSaga,
} from "./sagas/task-saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    board: boardReducer,
    task: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(fetchBoardsSaga);
sagaMiddleware.run(createBoardsSaga);
sagaMiddleware.run(deleteBoardsSaga);

sagaMiddleware.run(fetchTasksSaga);
sagaMiddleware.run(createTasksSaga);
sagaMiddleware.run(deleteTasksSaga);
sagaMiddleware.run(completeTasksSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
