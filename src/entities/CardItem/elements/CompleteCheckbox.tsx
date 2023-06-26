import { useState } from 'react'
import CustomCheckbox from '../../../ui/CustomCheckbox'
import { Card_T } from '../../../shared/types'
import { message } from 'antd'
import { useAppDispatch } from '../../../state/hooks'
import cardsSlice from '../../../state/Reducers/CardsReducer'
import updateCardAPI from '../../../shared/api/actions/updateCardAPI'
import Spinner from '../../../ui/Spinner'

const CompleteCheckbox = ({ completed, card }: { completed: boolean, card: Card_T }) => {

    const { _id: card_id, value, user_id } = card
    const [loading, setLoading] = useState(false)

    const dispatch = useAppDispatch()
    const { updateCard } = cardsSlice.actions

    const toggleComplete = async () => {
        setLoading(true)
        try {
            await updateCardAPI({ card_id, completed: !completed, value })
            dispatch(updateCard({ card: {
                _id: card_id,
                completed: !completed,
                user_id,
                value
            } }))
        } catch (e: any) {
            const message_info = e?.response?.data?.message || 'Произошла непредвиденная ошибка'
            console.log(e)
            message.error(message_info)
        } finally {
            setLoading(false)
        }
    }

    return <div>
        {
            loading ?
                <Spinner />
                :
                <CustomCheckbox onChange={toggleComplete} defaultChecked={completed} />
        }
    </div>
}

export default CompleteCheckbox