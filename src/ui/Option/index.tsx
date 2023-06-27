import styles from './lib/styles.module.css'

const active_style = {fontSize: '15px', fontFamily: 'Montserrat', color: 'white'}
const common_style = {fontSize: '15px', fontFamily: 'Montserrat', color: '#5D5175'}

const Option = ({value, active = false}: {value: string, active?: boolean, }) => {
    return <div className={`${styles.container} ${active? styles.bordered : undefined}`}>
        <span style={active? active_style : common_style}>
            {value}
        </span>
    </div>
}

export default Option