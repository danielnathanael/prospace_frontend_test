import { combineReducers } from 'redux'
import companies from './companies'
import offices from './offices'

export default combineReducers({
    companies,
    offices,
})