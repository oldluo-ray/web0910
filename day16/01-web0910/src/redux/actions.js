import { INCREMENT } from './constants'
// action对象  {type: ....}

// actionCreator
function incre(data) {
  return { type: INCREMENT, data }
}

export { incre }

//review
