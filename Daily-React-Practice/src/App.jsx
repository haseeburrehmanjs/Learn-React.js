// import { useEffect, useState } from "react"

import Button from "./Components/Button"

// function App() {
//   let [num, setNum] = useState(0)

//   useEffect(() => {
//     console.log('effect chal raha ha');

//   }, [AddCounter])
//   function AddCounter() {
//     setNum(num + 1)
//   }
//   function lessCounter() {
//     if (num >= 1) {
//       setNum(num - 1)
//     }
//   }

//   return (
//     <>
//       <h1>Hello World {num}</h1>
//       <button onClick={AddCounter}>Add</button>
//       <button onClick={lessCounter}>Less</button>
//     </>
//   )
// }

// export default App




function App() {


  return (
    <>
      <h1>Hello World</h1>
      <Button title="click me"/>
      <Button title="back"/>
      <Button title="add todo"/>
    </>
  )
}

export default App