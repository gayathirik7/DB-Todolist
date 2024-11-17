import { useEffect, useState } from 'react';
import axios from "axios"


import './App.css';


function App() {
  const [value,setvalue]=useState()
  const [fruit,setfruit]=useState([])
  useEffect(function(){
    axios.get("http://localhost:5000/fruitlist").then((data)=>{
      setfruit(data.data)
    })
  },[])
  
  const handle=(evt)=>{

    setvalue(evt.target.value)
  }
  const add=()=>{
    axios.post("http://localhost:5000/addfruit",{newfruit:value})
    setfruit([...fruit,{name:value}])
    setvalue("")
  }
  return (
    <div className="todo-container">
      <h1>Fruit List</h1>
  <input
    className="todo-input"
    value={value}
    onChange={handle}
    placeholder="Enter a task..."
  />
  <button className="add-button" onClick={add}>Add</button>

  <div className="todo-list">
    {fruit.map((item, index) => (
      <h1 key={index} className="todo-item">{item.name}</h1>
    ))}
  </div>
</div>

  );
}

export default App;
