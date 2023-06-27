import { useState } from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../state/hooks'
import cardsSlice from '../../../state/Reducers/CardsReducer'
import deleteCardAPI from '../../../shared/api/actions/deleteCardAPI'
import { Card_T } from '../../../shared/types'
import Spinner from '../../../ui/Spinner'
import { message } from 'antd';

const DeleteCardButton = ({ card }: { card: Card_T }) => {

    const { _id: card_id } = card

    const [loading, setLoading] = useState(false)

    const dispatch = useAppDispatch()
    const { removeCard } = cardsSlice.actions

    const deleteCard = async () => {
        setLoading(true)
        try {
            await deleteCardAPI({ card_id })
            dispatch(removeCard({ card_id }))
        } catch (e: any) {
            const message_info = e?.response?.data?.message || 'Произошла непредвиденная ошибка'
            console.log(e)
            message.error(message_info)
        } finally {
            setLoading(false)
        }
    }

    return <Button onClick={deleteCard} color='error'>
        {
            loading ?
                <Spinner />
                :
                <DeleteIcon color='error' />
        }
    </Button>
}

export default DeleteCardButton