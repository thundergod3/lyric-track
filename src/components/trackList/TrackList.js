import React from "react";
import { connect } from "react-redux";
import Loading from "../loading/Loading";
import TrackItem from "../trackItem/TrackItem";

const TrackList = (props) => {
	const { tracks, heading } = props;

	if (!tracks || tracks.length === 0) return <Loading />;

	return (
		<>
			<h3 className="text-center mb-4">{heading}</h3>
			<div className="row">
				{tracks.map((track) => (
					<TrackItem key={track.track.track_id} track={track} />
				))}
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		tracks: state.trackReducer.tracks,
		heading: state.trackReducer.heading,
	};
};

export default connect(mapStateToProps, null)(TrackList);
