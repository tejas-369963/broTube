import {createSlice} from '@reduxjs/toolkit'

const sBarToggleSlice = createSlice({
	name: "sidebar",
	initialState: {toggled: true},
	reducers: {
		toggle: (state, action) => {
			state.toggled = action.payload
		}
	}
})

export const {toggle} = sBarToggleSlice.actions

export default sBarToggleSlice.reducer