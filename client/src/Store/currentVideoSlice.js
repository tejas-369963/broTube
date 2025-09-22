import {createSlice} from '@reduxjs/toolkit'

const currentVideoSlice = createSlice({
	name: "video",
	initialState: {video: {}},
	reducers: {
		update: (state, action) => {
			state.video = action.payload
		}
	}
})

export const {update} = currentVideoSlice.actions

export default currentVideoSlice.reducer