import React, { useEffect } from "react";
import TrackList from "../components/trackList/TrackList";
import * as trackActions from "../store/redux/actions/trackAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Search from "../components/search/Search";

const HomePage = (props) => {
	const { trackActionsCreator } = props;
	const { fetchTrack } = trackActionsCreator;

	useEffect(() => {
		fetchTrack();
	}, []);

	return (
		<div className="container">
			<Search />
			<TrackList />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		trackActionsCreator: bindActionCreators(trackActions, dispatch),
	};
};

export default connect(null, mapDispatchToProps)(HomePage);
