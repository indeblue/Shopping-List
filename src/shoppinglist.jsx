import React from 'react';

const Shoppinglist = (props) => {
   

   
    return (
    <>
    <div className="shop_style">
    <i className="fa fa-trash" aria-hidden="true"
    onClick={()=>{
      props.onSelect (props.id); 
    }}>
    
</i>

    <li> {props.text}</li>
    </div>
    </>
    
    
    );
}

export default Shoppinglist;