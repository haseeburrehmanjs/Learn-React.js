// import { useEffect, useState } from "react"

// import { useEffect } from "react"
// import Button from "./Components/Button"

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




// function App() {
//   useEffect(()=> {
//     console.log('use effect');
//   }, [add])

//   function add(){

//   }

//   return (
//     <>
//       <div className="p-5 bg-slate-100 flex justify-between items-center">
//           <div>
//           <h1 className="text-2xl font-bold font-extrabold">Hasseb ur rehman js</h1>
//           </div>
//           <div>
//             <ul className="flex gap-3 items-center">
//               <li className="hover:text-green-400">User</li>
//               <li className="hover:text-green-400">Contect</li>
//               <li className="hover:text-green-400"><button className="btn bg-black text-white px-7 p-2 hover:bg-white hover:text-black border">Login</button></li>
//             </ul>
//           </div>
//       </div>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'

// const App = () => {
//     let [count , setCount] = useState(10)

//     return (
//         <div>
//             <Navbar />

//             <Footer />
//         </div>
//     )
// }

// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <>

//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Card from './Components/Card'

// const App = () => {
//     let [Number, setNumber] = useState(0)
//     function addBtn(){
//         setNumber(Number += 4)
//     }
//     return (
//         <>
//             <h1>{Number}</h1>
//             <button className='bg-black  text-white' onClick={addBtn}>Add</button>

//             <Card/>
//         </>
//     )
// }

// export default App








import React from 'react'

const App = () => {
  return (
    <>
      <h1>Hello haseeb</h1>
      <form>
        <input type="text" name="" id="" placeholder='enter your todo'/>
      </form>
    </>
  )
}

export default App


