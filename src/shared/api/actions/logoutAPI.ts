import instanse from "../Instanse"


const logoutAPI = () => {
    return instanse.delete('/auth/login')
}

export default logoutAPI