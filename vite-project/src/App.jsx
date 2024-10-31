import React, { useState } from 'react'

const App = () => {
  const  [number, setNumber] = useState(0)

  return (
    <div>
      <h1>hello counter {number}</h1>
      <button>add</button>
    </div>
  )
}

export default App
