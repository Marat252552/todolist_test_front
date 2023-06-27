import instanse from "../Instanse"



const claimRestoreLinkAPI = ({email}: {email: string}) => {
    return instanse.post('/auth/restore', {email})
}

export default claimRestoreLinkAPI