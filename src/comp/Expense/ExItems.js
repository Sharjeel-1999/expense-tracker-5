// import '../index.css';
import './Exitem.css';
import React,{useState} from 'react';
import Date from './Date';
import Card from '../UI/Card';

const ExItems=(prop)=>{
    // let title=prop.title;
   const [title,setTitle]=useState(prop.title);

    const click=()=>{
    //   title=prompt("Enter Your New Title Here");
    //   console.log(title);
        setTitle(prompt("Enter Your New Title Here"));

    }
 return(
     <Card className='expense-item'>
  <Date date={prop.date} />
     <div className='expense-item__description'>
         <h2>{title}</h2>
         <div className='expense-item__price'>${prop.amount}</div>
     </div>
     <button className='expense-button' onClick={ click }>Change-Title</button>
     </Card>
 );
}

export default ExItems;