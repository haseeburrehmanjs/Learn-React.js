import React, { useRef, useState } from 'react'

const App = () => {
  const [todo, settodo] = useState([])
  const inputRef = useRef()

  const addTodo = event => {
    event.preventDefault()
    // console.log(inputRef.current.value);
    if (inputRef.current.value === '') {
      alert('please enter todo')
    } else {
      let todos = inputRef.current.value;
      todo.push(todos)
      settodo([...todo])
      inputRef.current.value = ''
    }
  }

  // delete button
  const deleteBtn = (index) => {
    console.log(index);
    todo.splice(index, 1)
    settodo([...todo])
  }

  // edit button
  const editBtn = (index) => {
    let setNewTodo = prompt('enter new todo', todo[index])
    todo.splice(index, 1, setNewTodo)
    settodo([...todo])
    console.log(index);
  }

  return (
    <>
      <h1>Hello React</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder='Enter your todo' ref={inputRef} />
        <button>Add todo</button>
      </form>
      <div>
        {todo ? <ul>{todo.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <div>
              <button onClick={() => deleteBtn(index)}>Delete</button>
              <button onClick={() => editBtn(index)}>edit</button>
            </div>
          </div>
        ))}</ul> : <h1>loading...</h1>}
      </div>

    </>
  )
}

export default App
