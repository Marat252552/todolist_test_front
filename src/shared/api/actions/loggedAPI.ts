import { AxiosResponse } from "axios"
import instanse from "../Instanse"


type loggedAPI_T = () => Promise<AxiosResponse<{
    user: {
        email: string
    }
}>>

const loggedAPI: loggedAPI_T = () => {
    return instanse.get('/auth/logged')
}

export default loggedAPI