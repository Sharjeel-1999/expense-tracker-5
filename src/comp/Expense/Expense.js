
import React from "react";
import './Expense.css';
import ExItems from "./ExItems";




const Expenses=(props)=>{
    return(
    <div className='expenses'>
     <h2>Let's Go</h2>
   <ExItems 
   date={props.item[0].date}
   title={props.item[0].title} 
   amount={props.item[0].amount} />
   <ExItems date={props.item[1].date} 
   title={props.item[1].title} 
   amount={props.item[1].amount} />
   <ExItems date={props.item[2].date} 
   title={props.item[2].title} 
   amount={props.item[2].amount} />
   <ExItems date={props.item[3].date} 
   title={props.item[3].title} 
   amount={props.item[3].amount} />
    </div>
    );
}


export default Expenses;