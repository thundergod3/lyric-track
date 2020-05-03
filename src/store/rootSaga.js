import { all, fork } from "redux-saga/effects";
import trackSaga from "./saga/trackSaga";

export default function* rootSaga() {
	yield all([fork(trackSaga)]);
}
