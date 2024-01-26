import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  step:1, 
  firstStep: "",
  secondStep: "",
  thirdStep: "",
  fourthStep: "",
  fifthStep: "",
}

const slices = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setStep: (state, action) => {state.step=action.payload},
    setfirstStep: (state, action) => {state.firstStep=action.payload},
    setsecondStep: (state, action) => {state.secondStep=action.payload},
    setthirdStep: (state, action) => {state.thirdStep=action.payload},
    setfourthStep: (state, action) => {state.fourthStep=action.payload},
    setfifthStep: (state, action) => {state.fifthStep=action.payload},

  }
})

export const {setStep, setfirstStep, setsecondStep, setthirdStep, setfourthStep, setfifthStep} = slices.actions;
export default slices.reducer;