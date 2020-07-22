import { combineReducers } from 'redux';
import goalsReducer from './goalsReducer'
import topicsReducer from './topicsReducer'

const rootReducer = combineReducers({
    goalsReducer,
    topicsReducer
})

export default rootReducer;