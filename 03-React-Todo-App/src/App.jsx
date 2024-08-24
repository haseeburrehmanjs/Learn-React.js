import { useState, useRef } from "react"

function App() {
  let [todos, SetTodos] = useState([]);
  const inputRef = useRef()

  function addTodo(event){
    event.preventDefault()
    let newTodo = inputRef.current.value
    SetTodos([...todos, newTodo])
    inputRef.current.value = ''
  }

  function deleteBtn(index){
    todos.splice(index,1)
    SetTodos([...todos])
  }

  function editBtn(index){
    let ubdateVal = prompt('enter new val')
    todos.splice(index, 1 , ubdateVal)
    SetTodos([...todos])
    // inputRef.current.value = ''
  }

  return (
    <>
      <div>
        <form>
          <input type="text" placeholder="Enter Todo" ref={inputRef}/>
          <button onClick={addTodo}>Add Todo</button>
        </form>
        <div>
          <ul>{todos.map((item, index) => (
            <div key={index}>
              <li>{item}</li>
              <button onClick={() => deleteBtn(index)}>Delete</button>
              <button onClick={() => editBtn(index)}>Edit</button>
            </div>
          ))}</ul>
        </div>
      </div>
    </>
  )
}

export default App





// javascript destucurting practice

// let users = {
//   usernmae: 'haseeb ur rehman js',
//   email : 'haseeb@gamil.com',
//   phoneNumber : +923167979839,
//   isLoggedIn : true
// }

// let [email, usernmae, phoneNumber,isLoggedIn] = users

// console.log(users);


