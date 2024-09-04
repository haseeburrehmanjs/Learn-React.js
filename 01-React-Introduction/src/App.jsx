// react ka under hum apna function ko compnent khata hain 
// or component ka phala leter bara hoga 

// framwork vs librayies

// 1: framwork pr set of rules define hota 
// 2: libries pr set of rules define nahi hota

// import React, { useState } from 'react'

// const App = () => {
//   const [showBtn, setshowBtn] = useState(false)


//   return (
//     <>
//       {showBtn ? <button>This button only shown button value true</button> : <h1>Loading...</h1>}
//     </>
//   )
// }

// export default App



import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [array, setarray] = useState(null)

  useEffect(()=> {
    async function getData() {
      let data = await axios('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res.data);
        setarray(res.data)
      })
    }

    getData()

  }, [])
  return (
    <>
      <h1>Hello World</h1>
      <div>
        {array? array.map((item, index) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h1>{item.email}</h1>
            <hr />
          </div>
        )) : <h1>Loading.....</h1>}
      </div>
    </>
  )
}

export default App
