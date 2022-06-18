import { configureStore } from '@reduxjs/toolkit'
import list from './reducer/listProducts';

const store = configureStore({
  reducer: { list },
})

export default store;
