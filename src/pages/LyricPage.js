import React, { useEffect } from "react";
import * as trackActions from "../store/redux/actions/trackAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loading from "../components/loading/Loading";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const LyricPage = (props) => {
	const { lyric, track, trackActionsCreator } = props;
	const { fetchLyric, fetchTrackLyric, cleanTrackLyric } = trackActionsCreator;

	useEffect(() => {
		fetchLyric(props.match.params.id);
		fetchTrackLyric(props.match.params.id);
	}, []);

	if (!track || !lyric || Object.keys(track).length === 0 || Object.keys(lyric).length === 0) return <Loading />;

	return (
		<div className="container">
			<Link className="btn btn-dark btn-sm mb-4" to="/" onClick={cleanTrackLyric}>
				Go Back
			</Link>
			<div className="card">
				<h5 className="card-header">
					{track.track_name} by <span className="text-secondary">{track.artist_name}</span>
				</h5>
				<div className="card-body">
					<p className="card-text">{lyric.lyrics_body}</p>
				</div>
			</div>
			<ul className="list-group mt-3">
				<li className="list-group-item">
					<strong>Album ID</strong>: {track.album_id}
				</li>
				{track.primary_genres.music_genre_list.length !== 0 ? (
					<li className="list-group-item">
						<strong>Song Genre</strong>:
						{track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
					</li>
				) : null}
				<li className="list-group-item">
					<strong>Explicit Words</strong>: {track.explicit === 0 ? "No" : "Yes"}
				</li>
				<li className="list-group-item">
					<strong>Release Date</strong>: <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
				</li>
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		lyric: state.trackReducer.lyric,
		track: state.trackReducer.track,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		trackActionsCreator: bindActionCreators(trackActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LyricPage);
