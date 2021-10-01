import { useState } from 'react';
import './App.css';

function ToDo(props) {
  return <div>
    <label for={props.name}>{props.name}</label>:<input name={props.name} defaultValue={props.value || ''} onChange={props.onToDoChange}/>
  </div>
}

function ToDos(props) {
  const todos = props.todos;
  return todos.map(e=><ToDo name={e.name} value={e.value} onToDoChange={props.onToDoChange}/>)
}

function App() {
  const [todos, setToDos] = useState([{name: 'name', value: ''}, { name: 'email', value: ''}]);
  const handleToDoChange = (event) => {
    const { name, value } = event.target;
    setToDos(
      todos.map(e=>{
        if(e.name !== name) return e;
        else {
          return {
            ...e,
            value
          }
        }
      })
    )
  }
  return (
    <div className="App">
      <pre>
        {JSON.stringify(todos, null, 2)}
      </pre>
      <ToDos todos={todos} onToDoChange={handleToDoChange} />
    </div>
  );
}

export default App;
