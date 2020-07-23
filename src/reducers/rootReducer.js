import { combineReducers } from 'redux';
import goals from './goalsReducer'
import topics from './topicsReducer'

const rootReducer = combineReducers({
    goals,
    topics
})

export default rootReducer;