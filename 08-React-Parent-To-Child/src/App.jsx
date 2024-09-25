import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [getage, setgetage] = useState(null)

  function getAge(age){
    console.log(age);
    setgetage(age)
  }

  return (
    <div>
      <Navbar getAge={getAge}/>
      app {getage}
    </div>
  )
}

export default App
