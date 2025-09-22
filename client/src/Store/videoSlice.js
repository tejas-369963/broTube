import {createSlice} from '@reduxjs/toolkit'

const videoSlice = createSlice({
	name: "videos",
	initialState: {videos: []},
	reducers: {
		add: (state, action) => {
			state.videos = action.payload
		}
	}
})

export const {add} = videoSlice.actions

export default videoSlice.reducer