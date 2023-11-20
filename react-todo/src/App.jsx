import React, {useState} from "react"
import "./app.css"

function App(){
  return(
    <div className="app">
<h1>todo list app</h1>


<input 
type="text"
placeholder="add an item..." 
/>
<button>Add</button>
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
    </div>
  )
}



export default App
