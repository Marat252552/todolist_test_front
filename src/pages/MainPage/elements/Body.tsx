import WorkSpace from "../../../widgets/WorkSpace"
import { useAppSelector } from "../../../state/hooks"


const Body = () => {

    const {cards} = useAppSelector(state => state.cardsReducer)

    return <WorkSpace
        title="Todolist"
        cards={cards}
    />
}

export default Body