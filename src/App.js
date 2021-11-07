import React, {useState} from 'react';
import Todolist from './components/Todolist';
import Input from './components/Input';
import './Styles/App.scss';

function App() {
  const [input, SetInput] = useState({});
  const [Todos, SetTodos] = useState([]);
  return (
    <div className="App">
      <Input 
      input={input} 
      SetInput={SetInput} 
      SetTodos={SetTodos}
      Todos={Todos}
      />
      <Todolist Todos={Todos} SetTodos={SetTodos}/>
    </div>
  );
}

export default App;
