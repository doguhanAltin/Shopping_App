
import {createSlice} from '@reduxjs/toolkit'
export const expendMoneySlice=createSlice({
    name:"expendMoney",
    initialState:{
        items:[{id:1,name:"Hamburger",price:2,img:"https://www.unileverfoodsolutions.com.tr/konsept-uygulamalarimiz/sokak-lezzetleri/hamburger-malzemesi-secerken/jcr:content/parsys/content/textimage_copy_copy_628821058/image.transform/jpeg-optimized/image.1552661787858.jpg"},
            {id:2,name:"FIFA 2022",price:30,img:"https://cdn.akamai.steamstatic.com/steam/apps/1506830/capsule_616x353.jpg?t=1626111015"},
            {id:3,name:"Jacket",price:15,img:"https://www.hatemoglu.com/lacivert-d-desenli-slim-fit-ceket-21047-klasik-ceket-hatemoglu-54348-21-O.jpg"},
            {id:4,name:"Football Ticket",price:10,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHqhBBudlWXu8nZxmKRrIr1VSMZD0SrADMA&usqp=CAU"}

        ],
        money:100000000000000,
        bill_gates_items: [],
    },
    reducers:{
        addItem(state,action){
            const {number,id} =action.payload;
            const item = state.items.find(x=>x.id===id);
            state.money -= number*item.price;
            const bill_item=state.bill_gates_items.find(x=>x.id===id)
            if(number===0){
                return
            }
            if(bill_item){
                bill_item.number=Number(bill_item.number)+Number(number)
            }else{
            state.bill_gates_items.push({...item,number:Number(number)});}
        },
        removeItem(state,action){
            const {number,id}=action.payload
            const item = state.bill_gates_items.find(x=>x.id===id)
            if(Number(number)===0){
                return
            }
            if(!item){
                alert("O kadar item yok ")
                return
            }
            if(item.number-number<0){
                alert("O kadar item yok ")
            }else if (item.number-number===0){
                state.bill_gates_items=state.bill_gates_items.filter(x=>x.id!==id);
                state.money+=number*item.price
            }else{
                item.number-=number;
                state.money+=number*item.price
            }


        }

    }

})


export default expendMoneySlice.reducer;
export const {addItem , removeItem} =expendMoneySlice.actions