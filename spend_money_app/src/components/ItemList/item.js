import {useState} from 'react'
import "./items.css"
import { useDispatch,useSelector } from 'react-redux'
import {addItem, removeItem} from '../../redux/expendMoneySlice/expendMoneySlice'

function Item({props}) {
    const dispatch = useDispatch()
    const [number,setNumber]= useState(0);
    const handleBuy= ()=>{
            dispatch(addItem({id:props.id,number:number}))
    }
    const handleSell = ()=>{
        dispatch(removeItem({id:props.id,number:number}))
    }
    return (

        <div className="box">
            <img  src={props.img} />
            <div className="itemName">{props.name}</div>
            <div className="itemPrice"> ${props.price}</div>
            <div class="itemBuy">
                <button class = "sellButton" onClick= {(e)=>handleSell()}>Sell</button>
                <input type="number" min="0" onChange= {(e)=> setNumber(e.target.value) } value={number} />
                <button class= "buyButton" onClick= {(e)=>handleBuy()}> Buy </button>
            </div>
         </div>

    )
}

export default Item
