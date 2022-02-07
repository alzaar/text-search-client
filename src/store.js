import { configureStore } from '@reduxjs/toolkit'
import quotesReducer from './quotesReducer'
import quotesTypeReducer from './quotesTypeReducer'

export default configureStore({
  reducer: {
    quotes: quotesReducer,
    quotesType: quotesTypeReducer
  },
})