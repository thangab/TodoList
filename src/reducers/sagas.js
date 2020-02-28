import { call, put, takeEvery, all, delay } from "redux-saga/effects";
import { INIT_TODO, FETCH_TODO } from "../actions";

export function* callApiTodos() {
  try {
    yield delay(2000);
    const response = yield call(fetch, "data.json");
    const data = yield call([response, "json"]);
    yield put({ type: INIT_TODO, data });
  } catch (e) {
    console.log("Error", e);
  }
}

function* watchFetchTodo() {
  yield takeEvery(FETCH_TODO, callApiTodos);
}

export default function* watchSaga() {
  yield all([watchFetchTodo()]);
}
