import CardItem from '../../entities/CardItem'
import NewCardForm from '../../features/NewCardForm'
import { Card_T } from '../../shared/types'
import styles from './lib/styles.module.css'


const WorkSpace = ({title, cards}: {title: string, cards: Card_T[]}) => {

    return <div className={styles.container}>

        <div className={styles.title_module}>
            {title}
        </div>
        <div className={styles.content_module}>
            <NewCardForm />
            {cards.map(card => <CardItem key={card._id} card={card} />)}
        </div>

    </div>
}

export default WorkSpace