import {createSlice} from '@reduxjs/toolkit'

const deviceSlice = createSlice({
	name: "device",
	initialState: {device: null},
	reducers: {
		detect: (state, action) => {
			state.toggled = action.payload
		}
	}
})

export const {detect} = deviceSlice.actions

export default deviceSlice.reducer