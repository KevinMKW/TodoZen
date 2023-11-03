import '../styles.css'
import React, { useState } from 'react';

function TodoList () {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('')

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTodos([...todos, inputValue])
    setInputValue('')
  }
  
  return (
    <div className='Todo'>
      <h1>Todo List</h1>
      <form className='Top'>
        <input type="text" value={inputValue} className='input' onChange={handleChange}/>
        <button className='btn' onClick={handleSubmit}>ADD</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}> {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
         </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;