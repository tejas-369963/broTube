import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import videoSlice from './videoSlice.js'
import currentVideoSlice from './currentVideoSlice.js'
import sBarToggleSlice from './sBarToggleSlice.js'

const store = configureStore({
    reducer: {
        auth: authSlice,
        videos: videoSlice,
        video: currentVideoSlice,
        sidebar: sBarToggleSlice,
    }
})

export default store