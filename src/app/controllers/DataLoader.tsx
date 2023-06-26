import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../state/hooks"
import cardsSlice from "../../state/Reducers/CardsReducer"
import getCardsAPI from "../../shared/api/actions/getCardsAPI"



const DataLoader = ({ children }: { children: any }) => {

    const { login } = useAppSelector(state => state.userReducer.user)

    const dispatch = useAppDispatch()
    const { loadCardsBundle } = cardsSlice.actions

    useEffect(() => {
        if (!login) return
        const fetchCards = async () => {
            try {
                const { data } = await getCardsAPI()
                dispatch(loadCardsBundle({cards: data.cards}))
            } catch (e) {
                console.log(e)
            }
        }
        fetchCards()
    }, [login])

    return children
}

export default DataLoader