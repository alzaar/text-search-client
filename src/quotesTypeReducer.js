import { UPDATE_FILTER, UPDATE_PAGE, UPDATE_SEARCH_VALUE } from './constants'

const initialState = {
  filter: 'book_title',
  page: '0',
  value: ''
}


export default function quotesTypeReducer(state=initialState, action) {
  switch(action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        filter: action.payload
      }
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case UPDATE_SEARCH_VALUE:
      return {
        ...state,
        value: action.payload
      }
    default:
      return state
  }
}