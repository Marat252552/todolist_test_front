import instanse from "../Instanse"

const deleteCardAPI = ({card_id}: {card_id: string}) => {
    return instanse.delete(`/cards/${card_id}`)
}

export default deleteCardAPI