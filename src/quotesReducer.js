import {
  GET_QUOTES,
  EMPTY_RESULT
} from './constants'

const initialState = {
  quotes: [],
  emptyResult: false
}

export default function quotesReducer(state = initialState, action) {
  switch(action.type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: action.payload
      }
    case EMPTY_RESULT:
      return {
        ...state,
        emptyResult: action.payload
      }
    default:
      return state
  }
}