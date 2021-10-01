import { createContext } from 'react';
import './App.css';
import ToDos from './components/ToDos';
import useToDos from './hooks/useToDos';

const handlersContext = createContext();

function App() {
  const {
    todos,
    handleToDoChange
  } = useToDos();


  return (
    <div className="App">
      <pre>
        {JSON.stringify(todos, null, 2)}
      </pre>
      {/* <ToDos todos={todos} onToDoChange={handleToDoChange} /> */}

      <handlersContext.Provider value={{handleToDoChange}}>
        <ToDos todos={todos} />
      </handlersContext.Provider>
    </div>
  );
}

export default App;
export { handlersContext };