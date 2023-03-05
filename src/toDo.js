
import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo == ""){
      return;
    } else
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  //console.log(toDos.map((item, index)=><li key={index}>{item}</li>));
  return (
    <div>
      <h1 >My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
        value={toDo} 
        onChange={onChange} 
        type="text" 
        placeholder="write your to do..."/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index)=><li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
