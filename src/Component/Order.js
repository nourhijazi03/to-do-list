import React, { useState } from "react";
import "./Order.css"

const Order=({list,checked,deleteFx})=>{
   
    

    const l=list.map(({name,type,id})=>
    (
        
        <div className={type ? "orderDiv done":"orderDiv"} key={id}>
            <h2>{name}</h2>
            <div>
            <i className="fa-solid fa-check checked" onClick={()=>checked(id)}></i>
            <i className="fa-solid fa-trash deleted" onClick={(event)=>deleteFx(event,id)}></i>
            </div>
            
        </div>
        
    ));

    
    return (
        <div>
            {l}
        </div>
    );
}

export default Order;