import { GETUSERSOK } from './constants'
const initState = {
  users: []
}
export default function fn(state = initState, action) {
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
