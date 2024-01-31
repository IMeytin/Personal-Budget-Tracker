import { createSlice } from "@reduxjs/toolkit";

export const financeSlice = createSlice({
    name: 'finance',
    initialState: {
        financeData: {
            income: 3000,
            budget: 2400,
        },
        editStatus: {
            isEditingIncome: false,
            isEditingBudget: false
        }
    },
    reducers: {
        setIncome: (state, action) => {
            state.financeData.income = action.payload;
        },
        setBudget: (state, action) => {
            state.financeData.budget = action.payload;
        },
        setEditingStatus: (state, action) => {
            const {field, value} = action.payload;
            state.editStatus[field] = value;
        }
    }
});

export const getFinaceData = state => state.finance.financeData;
export const getEditStatus = state => state.finance.editStatus;
export const {setIncome, setBudget, setEditingStatus} = financeSlice.actions;

export default financeSlice.reducer;