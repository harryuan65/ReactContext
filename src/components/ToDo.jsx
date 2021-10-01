import React, { useContext } from 'react'
import { handlersContext } from '../App';

function ToDo(props) {
  const context = useContext(handlersContext);

  return <div>
    <label for={props.name}>{props.name}</label>:<input
      name={props.name}
      defaultValue={props.value || ''}
      onChange={context.handleToDoChange} />
  </div>
}

export default ToDo
