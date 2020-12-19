let initState = {
  count: 0,
  msg: '默认值'
}

export default function(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.data
      }
    default:
      return state
  }
}
