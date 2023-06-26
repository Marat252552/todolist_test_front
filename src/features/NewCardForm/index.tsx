import { Input, message } from 'antd'
import React, { useState } from 'react'
import { useAppDispatch } from '../../state/hooks'
import cardsSlice from '../../state/Reducers/CardsReducer'
import { Card_T } from '../../shared/types'
import createCardAPI from '../../shared/api/actions/createCardAPI'
import Spinner from '../../ui/Spinner'

const NewCardForm = () => {

    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    const { addCard } = cardsSlice.actions

    const onSearch = async () => {
        setLoading(true)
        try {
            const {data} = await createCardAPI({value})
            const {card} = data
            dispatch(addCard({card}))
            setValue('')
        } catch(e: any) {
            const message_info = e.response.data.message || 'Произошла непредвиденная ошибка'
            console.log(e)
            message.error(message_info)
        } finally {
            setLoading(false)
        }
        
    }

    return <>
        <Input.Search
            value={value}
            enterButton={loading? <Spinner /> : 'Создать'}
            onChange={e => setValue(e.target.value)}
            size="middle"
            onSearch={onSearch}
        />
    </>
}

export default NewCardForm