import { combineReducers } from 'redux'
import setsReducer from './sets-reducer'

const allReducers = combineReducers({
    sets: setsReducer
})

export default allReducers;