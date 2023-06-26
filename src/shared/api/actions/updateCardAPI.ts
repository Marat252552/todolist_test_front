import { AxiosResponse } from "axios"
import instanse from "../Instanse"
import { Card_T } from "../../types"

type updateCardAPI_T = ({card_id, value, completed}:{card_id: string, value: string, completed: boolean}) => Promise<AxiosResponse<{
    card: Card_T
}>>

const updateCardAPI: updateCardAPI_T = ({card_id, value, completed}) => {
    return instanse.put(`/cards/${card_id}`, {
        value, completed
    })
}

export default updateCardAPI