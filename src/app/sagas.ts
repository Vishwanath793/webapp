import { all, AllEffect, fork, ForkEffect } from "redux-saga/effects";
import watchSaveApiSaga from "../features/landingPage/saga/landingPageSaga";

/**
 * This is the root saga, it will fork all the sagas
 */
export default function* root(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(watchSaveApiSaga)]);
}
