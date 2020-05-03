import React, { useState } from "react";
import { bindActionCreators } from "redux";
import * as trackActions from "../../store/redux/actions/trackAction";
import { connect } from "react-redux";

const Search = (props) => {
	const [trackTitle, setTrackTitle] = useState("");
	const { trackActionsCreator } = props;
	const { fetchTrackBySearch } = trackActionsCreator;

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchTrackBySearch(trackTitle);
		setTrackTitle("");
	};
	return (
		<div className="card card-body mb-4 p-4">
			<h1 className="display-4 text-center">
				<i className="fas fa-music"></i>Search For A Song
			</h1>
			<p className="lead text-center">Get the lyrics for any song</p>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						placeholder="Song title..."
						name="trackTitle"
						className="form-control form-control-lg"
						value={trackTitle}
						onChange={(e) => setTrackTitle(e.target.value)}
					/>
				</div>
				<button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
					Get Track Lyrics
				</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		trackActionsCreator: bindActionCreators(trackActions, dispatch),
	};
};

export default connect(null, mapDispatchToProps)(Search);
