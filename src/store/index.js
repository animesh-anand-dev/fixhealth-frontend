import { configureStore } from '@reduxjs/toolkit'
import slices from '../store/slices'

export const store = configureStore({
    reducer:{root:slices}
})