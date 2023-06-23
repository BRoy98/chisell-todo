import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import { fetchBoardsSaga, createBoardsSaga, deleteBoardsSaga } from "./saga";
import boardReducer from "./board-slice";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(fetchBoardsSaga);
sagaMiddleware.run(createBoardsSaga);
sagaMiddleware.run(deleteBoardsSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
