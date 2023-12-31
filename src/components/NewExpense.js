import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import './ExpenseForm.css'

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        //console.log(expenseData)
        props.onAddExpense(expenseData)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}
export default NewExpense