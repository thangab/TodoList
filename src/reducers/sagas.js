import { call, put, takeEvery, all } from "redux-saga/effects";
import { INIT_TODO, FETCH_TODO, TOGGLE_TODO } from "../actions";

export function* callApiTodos() {
  try {
    const response = yield call(fetch, "data.json");
    const data = yield call([response, "json"]);
    yield put({ type: INIT_TODO, data });
  } catch (e) {
    console.log("Error", e);
  }
}

function* log() {
  yield console.log("TOGGLE TODO");
}

function* watchFetchTodo() {
  yield takeEvery(FETCH_TODO, callApiTodos);
}

function* watchDoneTodo() {
  yield takeEvery(TOGGLE_TODO, log);
}

export default function* watchSaga() {
  yield all([watchFetchTodo(), watchDoneTodo()]);
}
