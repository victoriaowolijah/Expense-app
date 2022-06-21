
import Expenses from './components/Expenses';
import React from 'react'

function App(props) {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: '56.04',
      date: new Date(2022, 6, 17),
    },

    { 
      id: 'e2',
     title: 'New TV',
     amount: '1299.99',
     date: new Date(2022, 6, 18)
    },

    {
      id: 'e3',
      title: 'New Phone', 
      amount: '699.99', 
      date: new Date(2022, 6, 19),
    },

    {
      id: 'e4',
      title: 'New Computer',
      amount: '1299.99',
      date: new Date(2022, 6, 20),
    },

  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses expenses={expenses} />

    </div>
  );
}

export default App