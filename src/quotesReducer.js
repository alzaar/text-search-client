import {
  GET_QUOTES
} from './constants'

const initialState = {
  quotes: []
}

export default function quotesReducer(state = initialState, action) {
  switch(action.type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: action.payload
      }
    default:
      return state
  }
}