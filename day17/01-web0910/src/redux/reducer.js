import { combineReducers } from 'redux'
import { GETUSERSOK, SETFILTER } from './constants'

const inituserState = {
  users: []
}
function users(state = inituserState, action) {
  switch (action.type) {
    case GETUSERSOK:
      return {
        ...state,
        users: action.data
      }
    default:
      return state
  }
}

let initfilterState = {
  filter: 'all'
}
function filter(state = initfilterState, action) {
  switch (action.type) {
    case SETFILTER:
      return {
        ...state,
        filter: action.data
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  users,
  filter
})

export default rootReducer
