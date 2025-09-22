import {createSlice} from '@reduxjs/toolkit'
import {LocalStorage} from '../utils'

const localToken = LocalStorage.get("nextPageToken")

const nextPageTokenSlice = createSlice({
	name: "token",
	initialState: {
		vToken: localToken, 
		sToken: null,
		cToken: null,
	},
	reducers: {
		updateVToken: (state, action) => {
			state.vToken = action.payload
			LocalStorage.set("nextPageToken", action.payload)
		},
		updateSToken: (state, action) => {
			state.sToken = action.payload
		},
		updateCToken: (state, action) => {
			state.cToken = action.payload
		}
	}
})

export const {updateVToken, updateSToken, updateCToken} = nextPageTokenSlice.actions

export default nextPageTokenSlice.reducer