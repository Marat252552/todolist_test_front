import {PayloadAction, createSlice} from '@reduxjs/toolkit'

export type User_T = {
    login: string | undefined
}

type initialState_T = {
    user: User_T
}

let initialState: initialState_T = {
    user: {
        login: undefined
    }
}
// Создаем slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<string>) {
            state.user.login = action.payload
        },
        resetUserState(state) {
            state.user.login = undefined
        }
    }
})

export default userSlice