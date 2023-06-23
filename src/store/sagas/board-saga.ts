import { takeEvery, put } from "redux-saga/effects";

import { setBoards } from "../slices/board-slice";
import { SagaActions } from "../saga-actions";
import boardsDB from "../../db/board.model";

export function* fetchBoards() {
  try {
    let { boards } = yield boardsDB.fetchBoards();
    yield put(setBoards(boards));
  } catch (e) {}
}

export function* createBoard(action: any) {
  try {
    yield boardsDB.createBoard(action.payload.boardName);
    let { boards } = yield boardsDB.fetchBoards();
    yield put(setBoards(boards));
  } catch (e) {}
}

export function* deleteBoard(action: any) {
  try {
    yield boardsDB.deleteBoard(action.payload.boardId);
    let { boards } = yield boardsDB.fetchBoards();
    yield put(setBoards(boards));
  } catch (e) {}
}

export function* fetchBoardsSaga() {
  yield takeEvery(SagaActions.FETCH_BOARDS, fetchBoards);
}

export function* createBoardsSaga() {
  yield takeEvery(SagaActions.CREATE_BOARD, createBoard);
}

export function* deleteBoardsSaga() {
  yield takeEvery(SagaActions.DELETE_BOARD, deleteBoard);
}
