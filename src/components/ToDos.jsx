import React from 'react'
import ToDo from './ToDo';

function ToDos(props) {
  const todos = props.todos;
  return todos.map(e=><ToDo name={e.name} value={e.value}/>)
}

export default ToDos
