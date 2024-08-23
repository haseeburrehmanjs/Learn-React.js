import { useRef, useState } from "react"

function App() {
  let [text, setText] = useState()

  function addTodo(event) {
    event.preventDefault()
  }

  return (
    <>
      <h2 className="text-center mt-3">Hello World</h2>
      {/* container div */}
      <div className="container text-center">
        {/* input form */}
        <form onSubmit={addTodo} className="d-flex flex-wrap">
          <input onChange={(e) => setText(e.target.value)} className="input" type="text" placeholder="Enter Todo!" />
          <button className="btn btn-success mt-3 addTodoBtn">Add Todo</button>
        </form>
      </div>

      <div id="list">
        <ul></ul>
      </div>
    </>
  )
}

export default App