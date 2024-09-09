// import {React, useEffect, useState} from 'react'

// const App = () => {
//     const [num, setNum] = useState(0)
//     function lessBtn(){
//         if(num >= 1){
//             setNum(num - 1)
//         }
//     }
//   return (
//     <>
//       <h1>Hello World</h1>
//       <h1>{num}</h1>
//       <button onClick={()=> setNum(num + 1)}>Add</button>
//       <button onClick={lessBtn}>Add</button>
//     </>
//   )
// }

// export default App



// import axios from 'axios'
// import React, { useState } from 'react'

// const App = () => {
//   const [product, setproduct] = useState([])

//   async function getData() {
//     try {
//       let product = await axios('https://fakestoreapi.com/products')
//       console.log(product.data);
//       setproduct(product.data)
//     } catch {

//     }
//   }

//   getData()
//   return (
//     <>
//       {product ? <h1>{product.map((item, index) => {
//         return <div key={index}>
//           <p>{item.title}</p>
//           <img style={{
//             width: '230px'
//           }} src={item.image} alt="" />
//         </div>
//       })}</h1> : <h1>Loading...</h1>}
//     </>
//   )
// }

// export default App



import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [userDetails, setuserDetails] = useState(null)

  useEffect(() => {
    async function getDataFromDb() {
      let users = await axios(`https://jsonplaceholder.typicode.com/users`)
      console.log(users.data);
      setuserDetails(users.data)
    }
    getDataFromDb()
  }, [])

  return (
    <>
      <h1>User Details</h1>
      <div>
        {userDetails ? userDetails.map((item) => {
          return <div>
            <h2>{item.name}</h2>
            <h2>{item.email}</h2>
            <button>Read More</button>
            <hr />
          </div>
        }) : <h1>Loading...</h1>}
      </div>
    </>
  )
}

export default App
