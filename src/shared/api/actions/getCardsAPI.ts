import { AxiosResponse } from "axios"
import instanse from "../Instanse"
import { Card_T } from "../../types"

type getCardsAPI_T = () => Promise<AxiosResponse<{
    cards: Card_T[]
}>>

const getCardsAPI: getCardsAPI_T = () => {
    return instanse.get('/cards')
}

export default getCardsAPI