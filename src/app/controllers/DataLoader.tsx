import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../state/hooks"
import cardsSlice from "../../state/Reducers/CardsReducer"
import getCardsAPI from "../../shared/api/actions/getCardsAPI"



const DataLoader = ({ children }: { children: any }) => {

    const { email } = useAppSelector(state => state.userReducer.user)

    const dispatch = useAppDispatch()
    const { loadCardsBundle } = cardsSlice.actions

    useEffect(() => {
        if (!email) return
        const fetchCards = async () => {
            try {
                const { data } = await getCardsAPI()
                dispatch(loadCardsBundle({cards: data.cards}))
            } catch (e) {
                console.log(e)
            }
        }
        fetchCards()
    }, [email])

    return children
}

export default DataLoader