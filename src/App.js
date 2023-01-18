import React, { useState } from 'react';
import ToDolists from './ToDolists';
const App=()=>{
  const[inputList,setInputList]=useState("");
  const [Items,setItems]=useState([]);
const itemEvent=(event)=>{
setInputList(event.target.value);

}
const listOfItems=()=>{
setItems((oldItems)=>{
  return [...oldItems,inputList];
})
setInputList('');
}
const deleteItems=(id)=>{
  setItems((oldItems)=>{
    return oldItems.filter((arrElem,index)=>{
return index !==id;
    })
  })
  console.log('deleted');
} 

return(
  <div className='main_div'>
    <div className='center'>
      <br/>
      <h1>ToDo List</h1>
      <br/>
      <input type='text' placeholder='name an item'
     value={inputList} onChange={itemEvent}></input>
      <button onClick={listOfItems}> +</button>
      <ol>
       { Items.map((itemval,index)=>{
      
        return <ToDolists key={index} id={index} text={itemval}
        onSelect={deleteItems}/> 
        })}
      </ol>
    </div>
  </div>
);
};
export default App;