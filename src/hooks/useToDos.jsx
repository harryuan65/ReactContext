import { useState } from 'react'

const useToDos = () => {
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
  return {
    todos,
    handleToDoChange
  }
}

export default useToDos
