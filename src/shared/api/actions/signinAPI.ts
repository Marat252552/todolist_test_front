import { AxiosResponse } from "axios"
import instanse from "../Instanse"

type data_T = {
    email: string,
    password: string,
    remember: boolean
}

type signinAPI_T = (data: data_T) => Promise<AxiosResponse<{
    user: {
        email: string
    },
    AccessToken: string
}>>

const signinAPI: signinAPI_T = (data) => {
    return instanse.post('/auth/signin', data)
}

export default signinAPI