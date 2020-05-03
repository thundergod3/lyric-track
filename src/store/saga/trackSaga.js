import * as types from "../../constants/types";
import { takeLatest, call, put } from "redux-saga/effects";
import { fetchTrackData, fetchLyricData, fetchTrackLyricData, fetchTrackDataBySearch } from "../../api/trackApi";
import {
	fetchTrackSucceeded,
	fetchLyricSucceeded,
	fetchTrackLyricSucceeded,
	fetchTrackBySearchSucceeded,
	clearTrackLyricSucceeded,
} from "../redux/actions/trackAction";

function* fetchTrack() {
	const tracks = yield call(fetchTrackData);
	console.log(tracks);
	yield put(fetchTrackSucceeded(tracks));
}

function* fetchTrackBySearch({ trackTitle }) {
	const tracks = yield call(fetchTrackDataBySearch, trackTitle);
	console.log(tracks);
	yield put(fetchTrackBySearchSucceeded(tracks));
}

function* fetchLyric({ id }) {
	const lyric = yield call(fetchLyricData, id);
	console.log(lyric);
	yield put(fetchLyricSucceeded(lyric));
}

function* fetchTrackLyric({ id }) {
	const track = yield call(fetchTrackLyricData, id);
	console.log(track);
	yield put(fetchTrackLyricSucceeded(track));
}

function* clearTrackLyric() {
	yield put(clearTrackLyricSucceeded());
}

export default function* trackSaga() {
	yield takeLatest(types.FETCH_TRACK_DATA, fetchTrack);
	yield takeLatest(types.FETCH_TRACK_DATA_BY_SEARCH, fetchTrackBySearch);
	yield takeLatest(types.FETCH_LYRIC_DATA, fetchLyric);
	yield takeLatest(types.FETCH_TRACK_LYRIC_DATA, fetchTrackLyric);
	yield takeLatest(types.CLEAR_TRACK_TRACK_LYRIC_DATA, clearTrackLyric);
}
