import { configureStore } from '@reduxjs/toolkit'
import articleSlice from './components/Article/articleSlice'

export const store = configureStore({
  reducer: {
    article: articleSlice,
  },
})