import { createSelector, createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
    name:'transactions',
    initialState: {
        transactionsData: {
            category: '',
            date: '',
            amount: ''
        },
        submittedData: []
    },
    reducers: {
        setTransactionsData: (state, action) => {
            const {name, value} = action.payload;
            state.transactionsData[name] = value;
        },
        resetTransactionData: state => {
            state.transactionsData = {
                category: '',
                date: '',
                amount: ''
            }
        },
        addSubmittedData: state => {
            const transactionsWithId = {
                ...state.transactionsData,
                id: new Date().getTime()
            }
            state.submittedData.push(transactionsWithId)
        },
        removeSubmittedData: (state, action) => {
            state.submittedData = state.submittedData.filter(dataItem => 
                dataItem.id !== action.payload.id)
        }
    }
})

export const getTransactionsData = state => state.transactions.transactionsData;
export const getSubmittedData = state => state.transactions.submittedData;

export const getTotalByCategory = createSelector(
    [getSubmittedData],
    (submittedData) => {
        return submittedData.reduce((totals, {category, amount}) => {
            if(!totals[category]) {
                totals[category] = 0
            }
            totals[category] += Number(amount);
            return totals;
        },{})
    }
)

export const getTotalExpenses = createSelector(
    [getSubmittedData],
    (submittedData) => {
        return submittedData.reduce((total, {amount}) => {
            return total += Number(amount)
        }, 0)
    }
)

export const {setTransactionsData, resetTransactionData, addSubmittedData, removeSubmittedData} = transactionsSlice.actions;

export default transactionsSlice.reducer;