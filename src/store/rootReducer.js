import { combineReducers } from "redux";
import trackReducer from "./redux/reducers/trackReducer";

const rootReducer = combineReducers({
	trackReducer,
});

export default rootReducer;
