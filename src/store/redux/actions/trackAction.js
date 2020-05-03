import * as types from "../../../constants/types";

export const fetchTrack = () => {
	return {
		type: types.FETCH_TRACK_DATA,
	};
};

export const fetchTrackSucceeded = (tracks) => {
	return {
		type: types.FETCH_TRACK_DATA_SUCCEEDEED,
		tracks,
	};
};

export const fetchLyric = (id) => {
	return {
		type: types.FETCH_LYRIC_DATA,
		id,
	};
};

export const fetchLyricSucceeded = (lyric) => {
	return {
		type: types.FETCH_LYRIC_DATA_SUCCEEDEED,
		lyric,
	};
};

export const fetchTrackLyric = (id) => {
	return {
		type: types.FETCH_TRACK_LYRIC_DATA,
		id,
	};
};

export const fetchTrackLyricSucceeded = (track) => {
	return {
		type: types.FETCH_TRACK_LYRIC_DATA_SUCCEEDEED,
		track,
	};
};

export const fetchTrackBySearch = (trackTitle) => {
	return {
		type: types.FETCH_TRACK_DATA_BY_SEARCH,
		trackTitle,
	};
};

export const fetchTrackBySearchSucceeded = (tracks) => {
	return {
		type: types.FETCH_TRACK_DATA_BY_SEARCH_SUCCEEDEED,
		tracks,
	};
};

export const cleanTrackLyric = () => {
	return {
		type: types.CLEAR_TRACK_TRACK_LYRIC_DATA,
	};
};

export const clearTrackLyricSucceeded = () => {
	return {
		type: types.CLEAR_LYRIC_TRACK_DATA_SUCCEEDEED,
	};
};
