import todoReducer from './todoReducer'
import { combineReducers } from 'redux'
const rootreducer= combineReducers(
    {
        todoReducer
    }
)
export default rootreducer;