import { Button } from '@mui/material'
import { Card_T } from '../../shared/types'
import styles from './lib/styles.module.css'
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import Spinner from '../../ui/Spinner';
import Editor from './elements/Editor';
import CompleteCheckbox from './elements/CompleteCheckbox';
import DeleteCardButton from './elements/DeleteCardButton';


const CardItem = ({ card }: { card: Card_T }) => {

    const { completed, value } = card

    const [editLoading, setEditLoading] = useState(false)
    const [editActive, setEditActive] = useState(false)

    return <div className={styles.container}>

        <div className={styles.first_module}>

            <CompleteCheckbox card={card} completed={completed} />

            {
                editActive ?
                    <Editor
                        setEditActive={setEditActive}
                        setEditLoading={setEditLoading}
                        card={card}
                    />
                    :
                    <div style={{ boxSizing: 'border-box', overflow: 'hidden' }}>
                        <span >{value} </span>
                    </div>

            }

        </div>

        <div className={styles.second_module}>

            <Button onClick={() => { setEditActive(prev => !prev) }}>
                {
                    editLoading ?
                        <Spinner />
                        :
                        <CreateIcon />
                }

            </Button>

            <DeleteCardButton card={card} />

        </div>

    </div>
}

export default CardItem