import { forwardRef } from 'react'
import styles from './lib/styles.module.css'


const TransparentInput = forwardRef((props: any, ref: any) => {
  return <input ref={ref} {...props} className={styles.custom_input} />
})

export default TransparentInput