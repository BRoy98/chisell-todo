import { takeEvery, put } from "redux-saga/effects";

import { setTasks } from "../slices/task-slice";
import { SagaActions } from "../saga-actions";
import tasksDB from "../../db/task.model";

export function* fetchTasks(action: any) {
  try {
    let { tasks } = yield tasksDB.fetchTasks(action.payload.boardId);
    yield put(setTasks({ boardId: action.payload.boardId, tasks }));
  } catch (e) {
    yield put({ type: SagaActions.FETCH_BOARDS_FAILED });
  }
}

export function* createTask(action: any) {
  try {
    yield tasksDB.createTask(action.payload.name, action.payload.boardId);
    let { tasks } = yield tasksDB.fetchTasks(action.payload.boardId);
    yield put(setTasks({ boardId: action.payload.boardId, tasks }));
  } catch (e) {
    yield put({ type: SagaActions.FETCH_BOARDS_FAILED });
  }
}

export function* deleteTask(action: any) {
  try {
    yield tasksDB.deleteTask(action.payload.taskId);
    let { tasks } = yield tasksDB.fetchTasks(action.payload.boardId);
    yield put(setTasks({ boardId: action.payload.boardId, tasks }));
  } catch (e) {
    yield put({ type: SagaActions.FETCH_BOARDS_FAILED });
  }
}

export function* fetchTasksSaga() {
  yield takeEvery(SagaActions.FETCH_TASKS, fetchTasks);
}

export function* createTasksSaga() {
  yield takeEvery(SagaActions.CREATE_TASK, createTask);
}

export function* deleteTasksSaga() {
  yield takeEvery(SagaActions.DELETE_TASK, deleteTask);
}
