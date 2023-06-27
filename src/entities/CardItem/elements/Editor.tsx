import { useForm } from "react-hook-form"
import { message } from "antd"
import { useAppDispatch } from "../../../state/hooks"
import cardsSlice from "../../../state/Reducers/CardsReducer"
import updateCardAPI from "../../../shared/api/actions/updateCardAPI"
import { TextField } from '@mui/material'
import { Editor_T } from "../lib/types"

type Values_T = {
    newValue: string
}

const Editor: Editor_T = ({ card, setEditLoading, setEditActive }) => {

    const { _id: card_id, completed, value, user_id } = card

    const { register, handleSubmit } = useForm<Values_T>({
        mode: 'onSubmit',
        defaultValues: { newValue: value }
    })

    const dispatch = useAppDispatch()
    const { updateCard } = cardsSlice.actions

    const onSubmit = async ({ newValue }: Values_T) => {
        setEditLoading(true)
        try {
            await updateCardAPI({ card_id, completed, value: newValue })
            dispatch(updateCard({
                card: {
                    value: newValue,
                    _id: card_id,
                    completed,
                    user_id
                }
            }))
        } catch (e: any) {
            const message_info = e?.response?.data?.message || 'Произошла непредвиденная ошибка'
            console.log(e)
            message.error(message_info)
        } finally {
            setEditLoading(false)
            setEditActive(false)
        }
    }

    return <>
        <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
            <TextField
                variant="standard"
                inputProps={{ style: { fontSize: '13px', fontFamily: 'Montserrat' } }}
                size="small"
                {...register('newValue', {
                    required: true
                })}
                fullWidth
            />
        </form>
    </>
}

export default Editor