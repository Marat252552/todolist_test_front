import {PayloadAction, createSlice} from '@reduxjs/toolkit'

export type User_T = {
    email: string | undefined
}

type initialState_T = {
    user: User_T
}

let initialState: initialState_T = {
    user: {
        email: undefined
    }
}
// Создаем slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<string>) {
            state.user.email = action.payload
        },
        resetUserState(state) {
            state.user.email = undefined
        }
    }
})

export default userSlice