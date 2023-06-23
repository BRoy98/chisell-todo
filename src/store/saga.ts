import { takeEvery, put } from "redux-saga/effects";

import { setBoards } from "./board-slice";
import { sagaActions } from "./saga-actions";
import db from "../db";

export function* fetchBoards() {
  try {
    let { boards } = yield db.fetchBoards();
    yield put(setBoards(boards));
  } catch (e) {
    yield put({ type: sagaActions.FETCH_BOARDS_FAILED });
  }
}

export function* createBoard(action: any) {
  try {
    yield db.createBoard(action.payload.boardName);
    let { boards } = yield db.fetchBoards();
    yield put(setBoards(boards));
  } catch (e) {
    yield put({ type: sagaActions.FETCH_BOARDS_FAILED });
  }
}

export function* deleteBoard(action: any) {
  try {
    yield db.deleteBoard(action.payload.boardId);
    let { boards } = yield db.fetchBoards();
    yield put(setBoards(boards));
  } catch (e) {
    yield put({ type: sagaActions.FETCH_BOARDS_FAILED });
  }
}

export function* fetchBoardsSaga() {
  yield takeEvery(sagaActions.FETCH_BOARDS, fetchBoards);
}

export function* createBoardsSaga() {
  yield takeEvery(sagaActions.CREATE_BOARD, createBoard);
}

export function* deleteBoardsSaga() {
  yield takeEvery(sagaActions.DELETE_BOARD, deleteBoard);
}
