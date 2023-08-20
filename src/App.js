
import { useState } from 'react';
import './App.css';
import Order from './Component/Order';
import { type } from '@testing-library/user-event/dist/type';
function App() {

  //temp states
  const[name,setName]=useState("");
  const[type,setType]=useState(false);
  

  const[orders,setOrders]=useState([

    { id:0,
      name:"buy milk",
      type:false,
  },
    {
      id:1,
      name:"send msg",
      type:true,
    },
  ]);

  const[id,setId]=useState(orders.length);
 
  const orderHandler=(e)=>{
    const name=e.target.value;
    setName(name);
  };

  const addOrder=()=>{
    setType(false);
    setId(orders.length+1)
    setOrders(oldArray=>[...oldArray,{id,name,type}])
    setName("");
    console.log(orders);
  };

  const handleType=(index)=>{
    orders.map((el)=>{
    if(el.id==index){
      if(el.type==true){
        el.type=false;
      }
      else{
        el.type=true;
      }
    }
  });
    setOrders(previous =>[...previous])
    
  }

  const deleteTask=(e,index)=>{
    setOrders((previous)=>{
      return previous.filter((el)=> el.id!==index);
    })
  }
 

  return (
    <div className="App">
      <div className='inputDiv'>
      <input type='text' placeholder='to-do...' className='inputF' value={name}
      onChange={orderHandler}></input>
      <button className='addBtn' onClick={addOrder}>Add</button>
      </div>
      <div className='orders'>
      <Order list={orders} checked={handleType} deleteFx={deleteTask} />
      </div>
    </div>
  );
}

export default App;
