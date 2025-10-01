import {createSlice} from '@reduxjs/toolkit'
import {LocalStorage} from '../utils'

const localToken = LocalStorage.get("nextPageToken")

const nextPageTokenSlice = createSlice({
	name: "token",
	initialState: {
		vToken: localToken
	},
	reducers: {
		updateVToken: (state, action) => {
			state.vToken = action.payload
			LocalStorage.set("nextPageToken", action.payload)
		}
	}
})

export const {updateVToken} = nextPageTokenSlice.actions

export default nextPageTokenSlice.reducer