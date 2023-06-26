import styles from './styles.module.css'
import Router from "./controllers/Router"
import LoggedChecker from './controllers/LoggedChecker'
import { setupStore } from '../state/store'
import { Provider } from 'react-redux'

const store = setupStore()

const App = () => {
  return (
    <div className={styles.container}>
      <Provider store={store}>
        <LoggedChecker>
          <Router />
        </LoggedChecker>
      </Provider>

    </div>
  )
}

export default App