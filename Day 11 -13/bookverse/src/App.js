import Hi from './components/func';
import { useState } from 'react'; 
function App() {
  const [na,setname]=useState("");
  function HandleClick(topic){
    alert(`button clicked ${topic}`);
  }
  function change(event){
    setname(event.target.value);}
  return (
    <div>   <Hi/>
    <Hi name="sachin" age="21"/>
     <Hi name="harinee" age="21"/>
      <Hi name="vimal" age="17"/>
     
      <button onClick={()=>HandleClick("top")}>click me</button>
      <input type="text" placeholder="enter text" onChange={change}/>
      <h1>{na}</h1>

 </div>
  
  );
}

export default App;
