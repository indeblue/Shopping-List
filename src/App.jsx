import React, { useState } from 'react';
import './index.css'
import Shoppinglist from './shoppinglist'
const App = () => {
    
    const[inputList,setInputList]=useState("");
   const [Item, setItem]=useState([]);
    const ItemAdd =(event)=>{setInputList(event.target.value)}
    
  const anotherAdd =()=>{
      setItem((olditems)=>{
          return [...olditems, inputList]
      });
      setInputList('');
  }  



  const deletep =(id)=>{

    setItem((olditems)=>{
        return olditems.filter((arrele,index)=>{
return index!==id ;
        });
    });

  };




    return (
    <>
      <div className=" main_div">
        <div className=" center_div">
            <br />
           
            <h1> <i class="fa fa-shopping-cart" aria-hidden="true"></i>  Shopping List</h1>
            <br />
            <input type="text" placeholder="Add Items to List" value={inputList} onChange={ItemAdd}/>
            <button onClick={anotherAdd}>Add</button>

           <ol>
          {/* <li> {inputList}</li> */}
         {  Item.map((itemval,index) =>
         {
          return <Shoppinglist key={index} 
        id={index}
         text={itemval}
         onSelect={deletep}
          /> ;
          
         })
          }
            </ol>
        </div>
     </div>

    </>
    )
}
export default App;