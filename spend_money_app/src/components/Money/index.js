import React from 'react'
import {useSelector} from 'react-redux'
import styles from "./index.module.css"
function Money() {
    const money =useSelector(state => state.expendMoney.money)

    return (

        <div className={styles.container}>
           <div className={styles.money}>{`${money} $`}</div>
        </div>
    )
}

export default Money
