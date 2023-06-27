import instanse from "../Instanse"


const setNewPasswordAPI = ({key, password}: {key: string, password: string}) => {
    return instanse.post('/auth/set_new_password', {key, password})
}

export default setNewPasswordAPI