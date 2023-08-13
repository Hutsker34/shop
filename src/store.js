import { configureStore } from '@reduxjs/toolkit'
import articleSlice from './components/Article/articleSlice'
import headerSlice from './components/Header/headerSlice'
import filterSlice from './components/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    article: articleSlice,
    header: headerSlice,
    filters: filterSlice
  },
})