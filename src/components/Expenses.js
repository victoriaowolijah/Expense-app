import React from 'react'
import Expenseitem from "./Expenseitem";
import './Expenses.css';


function Expenses(props) {
  return (
    <div className="expenses">
            <Expenseitem 
            title = {props.expenses[0].title} 
            amount = {props.expenses[0].amount} 
            date = {props.expenses[0].date}/>

            <Expenseitem 
            title = {props.expenses[1].title} 
            amount = {props.expenses[1].amount} 
            date = {props.expenses[1].date}/>

            <Expenseitem 
            title = {props.expenses[2].title} 
            amount = {props.expenses[2].amount} 
            date = {props.expenses[2].date}/>

            <Expenseitem 
            title = {props.expenses[3].title} 
            amount = {props.expenses[3].amount} 
            date = {props.expenses[3].date}/>

        </div>
  )
}

export default Expenses