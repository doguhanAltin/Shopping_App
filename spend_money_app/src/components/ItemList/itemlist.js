import React from 'react'
import { useSelector } from 'react-redux'
import Item from './item'
import "./items.css"

function Itemlist() {
    const items= useSelector(state=>state.expendMoney.items);
    console.log(items)
    return (
        
        <div className="container">
             {items.map((item)=>(<Item props={item}></Item>))}


        </div>
    )
}

export default Itemlist
