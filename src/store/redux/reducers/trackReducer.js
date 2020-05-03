import * as types from "../../../constants/types";

const initalState = {
	tracks: [],
	heading: "Top 10 tracks",
	lyric: {},
	track: {},
};

const trackReducer = (state = initalState, action) => {
	console.log(action.type);

	switch (action.type) {
		case types.FETCH_TRACK_DATA_SUCCEEDEED: {
			return { ...state, tracks: action.tracks };
		}
		case types.FETCH_TRACK_DATA_BY_SEARCH_SUCCEEDEED: {
			return { ...state, tracks: action.tracks, heading: "Search Results" };
		}
		case types.FETCH_LYRIC_DATA_SUCCEEDEED: {
			return { ...state, lyric: action.lyric };
		}
		case types.CLEAR_LYRIC_TRACK_DATA_SUCCEEDEED: {
			return { ...state, lyric: {}, track: {} };
		}
		case types.FETCH_TRACK_LYRIC_DATA_SUCCEEDEED: {
			return { ...state, track: action.track };
		}
		default: {
			return state;
		}
	}
};

export default trackReducer;
