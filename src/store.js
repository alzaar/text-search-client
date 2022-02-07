import { configureStore } from '@reduxjs/toolkit'
import quotesReducer from './quotesReducer'

export default configureStore({
  reducer: {
    quotes: quotesReducer
  },
})