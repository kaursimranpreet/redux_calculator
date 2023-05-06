import { compose, createSlice } from "@reduxjs/toolkit";

const initialState = {
    conValue: '',
}

const counterSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        showConsole: (state, actions) => {

            if (actions.payload.button == '=') {

                try {
                    state.conValue = eval(state.conValue)
                }
                catch (e) {
                    state.conValue = 'Invalid input'
                }
            } else if (actions.payload.button == 'C') {
                state.conValue = '';
            }

            else {
                state.conValue = '' + state.conValue + actions.payload.button
            }
        }
    }
})

export const { showConsole } = counterSlice.actions;
export default counterSlice.reducer;