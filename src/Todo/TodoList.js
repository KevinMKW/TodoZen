import React, { useState } from 'react';

function TodoList () {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('')

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTodos([...todos, inputValue])
    setInputValue('')
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type="text" value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo}> {todo}
            <button>Delete</button>
         </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;