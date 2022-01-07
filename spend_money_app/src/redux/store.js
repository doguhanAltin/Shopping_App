
import {configureStore} from '@reduxjs/toolkit'
import expendMoneySlice from './expendMoneySlice/expendMoneySlice'
export const store= configureStore( {
    reducer: {
        expendMoney:expendMoneySlice,
    }
}
)