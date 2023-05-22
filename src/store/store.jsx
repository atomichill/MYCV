import { configureStore } from '@reduxjs/toolkit'
import { modalValueSlice } from '../slice/modalSlice'

export const store = configureStore({
  reducer: {
    modalValue: modalValueSlice.reducer
  },
})


