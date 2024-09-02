import {React, useEffect, useState} from 'react'

const App = () => {
    const [num, setNum] = useState(0)
    function lessBtn(){
        if(num >= 1){
            setNum(num - 1)
        }
    }
  return (
    <>
      <h1>Hello World</h1>
      <h1>{num}</h1>
      <button onClick={()=> setNum(num + 1)}>Add</button>
      <button onClick={lessBtn}>Add</button>
    </>
  )
}

export default App
