import React, {useState} from "react"
import "./app.css"

function App(){
  const[newItem,setNewItem]=useState("")
  const[items,setitem]=useState([])

function addItem(){
  if(!newItem){
    alert("enter an items")
    return;
  }
  const item={
    id:Math.floor(Math.random()*1000),
    value:newItem
  }
  setitem(olditems=>[...olditems,item])
  setNewItem("");
}

  return(
    <div className="app">
<h1>todo list app</h1>


<input 
type="text"
placeholder="add an item..." 
value={newItem}
onChange={e=>setNewItem(e.target.value)}
/>
<button onClick={()=>addItem()}>Add</button>
<ul>
  {items.map(item=>{
    return(
<li key={item.id}>{item.value}</li>

    )
    })}

</ul>
    </div>
  )
}



export default App
