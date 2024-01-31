import { configureStore } from "@reduxjs/toolkit";
import finance from './financeSlice'
import transactions from './transactionsSlice'

export const store = configureStore({
    reducer: {
        finance,
        transactions
    }
})