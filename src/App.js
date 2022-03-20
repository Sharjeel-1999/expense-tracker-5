import React from 'react';
import './index.css';
import Expenses from './comp/Expense/Expense';






const App=(props)=> {
  // let expenseDate=new Date(2022,2,17);
  // let expenseTitle="School Fees";
  // let expenseAmount=300;
  let expenses=[{
    id:'S1',
    title:"School Fees",
    amount:200,
    date:new Date(2022,2,17)
  },{
    id:'S2',
    title:"Tuition-Fees",
    amount:150,
    date:new Date(2022,3,17)
  },{
    id:'S3',
    title:"Coaching-Fees",
    amount:144,
    date:new Date(2022,3,12)
  },{
    id:'S4',
    title:"Madarsa-Fees",
    amount:125,
    date:new Date(2022,5,11)
  },
];

  return (
    <div>
   <Expenses item={expenses}/>
    </div>
  );
}

export default App;
