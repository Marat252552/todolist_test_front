import { AxiosResponse } from "axios"
import instanse from "../Instanse"
import { Card_T } from "../../types"

type createCardAPI_T = ({value}: {value: string}) => Promise<AxiosResponse<{
    card: Card_T
}>>

const createCardAPI: createCardAPI_T = ({value}) => {
    return instanse.post('/cards', {value})
}

export default createCardAPI