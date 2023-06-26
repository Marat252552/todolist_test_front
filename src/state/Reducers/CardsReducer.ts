import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { Card_T } from '../../shared/types'

type initialState_T = {
    cards: Card_T[]
}

let initialState: initialState_T = {
    cards: []
}
// Создаем slice
const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard(state, action: PayloadAction<{card: Card_T}>) {
            const {card} = action.payload
            state.cards.push(card)
        },
        loadCardsBundle(state, action: PayloadAction<{cards: Card_T[]}>) {
            const {cards} = action.payload
            state.cards = cards
        },
        removeCard(state, action: PayloadAction<{card_id: string}>) {
            const {card_id} = action.payload
            state.cards = state.cards.filter(card => card._id !== card_id)
        },
        updateCard(state, action: PayloadAction<{card: Card_T}>) {
            const {card} = action.payload
            state.cards = state.cards.filter(el => el._id !== card._id)
            state.cards.push(card)
        }
    }
})

export default cardsSlice