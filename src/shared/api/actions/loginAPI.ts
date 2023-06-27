import { AxiosResponse } from "axios"
import instanse from "../Instanse"

type data_T = {
    email: string,
    password: string,
    remember: boolean
}

type loginAPI_T = (data: data_T) => Promise<AxiosResponse<{
    user: {
        email: string
    },
    AccessToken: string
}>>

const loginAPI: loginAPI_T = (data) => {
    return instanse.post('/auth/login', data)
}

export default loginAPI