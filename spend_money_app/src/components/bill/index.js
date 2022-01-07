import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.css'
function Bill() {
    const data = useSelector(state=>state.expendMoney.bill_gates_items);
    var sum =0;

    data.map((item)=>(
        sum+=item.number*item.price
    ))

    return (
        <div>
                <ul>
            {data.map((item)=>(
                <li> 

                
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.number}>X{item.number}</span>
                    <span className={styles.price}> ${item.number*item.price}</span>
                </li>

            ))}
            </ul>
            <hr />
            <span style={{fontSize:"x-large"}}> SUM : ${sum}</span>
        </div>
    )
}

export default Bill
