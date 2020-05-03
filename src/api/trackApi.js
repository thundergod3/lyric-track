import axios from "axios";

const baseUrl = process.env.REACT_APP_TRACK_URL
	? "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1"
	: process.env.REACT_APP_TRACK_URL;
const apiKey = process.env.REACT_APP_API_KEY ? "f57d879c10cfe54ba147f01085833dad" : process.env.REACT_APP_API_KEY;

export const fetchTrackData = async () => {
	try {
		const response = await axios.get(
			`${baseUrl}/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${apiKey}`
		);
		return response.data.message.body.track_list;
	} catch (error) {
		console.log(error);
	}
};

export const fetchLyricData = async (id) => {
	try {
		const response = await axios.get(`${baseUrl}/track.lyrics.get?track_id=${id}&apikey=${apiKey}`);
		return response.data.message.body.lyrics;
	} catch (error) {
		console.log(error);
	}
};

export const fetchTrackLyricData = async (id) => {
	try {
		const response = await axios.get(`${baseUrl}/track.get?track_id=${id}&apikey=${apiKey}`);
		return response.data.message.body.track;
	} catch (error) {
		console.log(error);
	}
};

export const fetchTrackDataBySearch = async (trackTitle) => {
	console.log(trackTitle);
	try {
		const response = await axios.get(
			`${baseUrl}/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${apiKey}`
		);
		return response.data.message.body.track_list;
	} catch (error) {
		console.log(error);
	}
};
