import {createSlice} from '@reduxjs/toolkit'
import {LocalStorage} from '../utils'

const localToken = LocalStorage.get("nextPageToken")

const nextPageTokenSlice = createSlice({
    name: "token",
    initialState: {token: localToken},
    reducers: {
        updateToken: (state, action) => {
            state.token = action.payload
            LocalStorage.set("nextPageToken", action.payload)
        }
    }
})

export const {updateToken} = nextPageTokenSlice.actions

export default nextPageTokenSlice.reducer