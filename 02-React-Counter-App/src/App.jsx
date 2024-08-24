// import { useState } from "react"

import { useState } from "react"

function App() {
  let [num, setNum] = useState(0)

  function addBtn() {
    setNum(num + 1)
  }
  function lessBtn() {
    if (num === 0) {
      alert('Your value is 0')
    } else {
      setNum(num - 1)
    }
  }

  function resetBtn() {
    if (num === 0) {
      alert('already Number is 0')
    } else {
      setNum(0)
    }
  }

  return (
    <>
      <div className="container">
        <div>
          <div className="Card-box">
          <h1 className="text-white text-center">Counter</h1>
            <div className="text-center">
              <h1 className="text-white">{num}</h1>
              <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-primary" onClick={addBtn}>+</button>
                <button className="btn btn-danger" onClick={resetBtn}>Reset</button>
                <button className="btn btn-primary" onClick={lessBtn}>-</button>
              </div>
              <div>
                <p className="text-white mt-2">Follow on <span><a href="https://github.com/haseeburrehmanjs" target="blank"> github</a></span> and <span><a href="https://www.linkedin.com/in/kamranahmedjs" target="blank">linkedin</a></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


// function App(){
//   let [num, SetNum] = useState(1)

//   function addBtn(){
//     SetNum(num + 1)
//   }

//   function lessBtn(){
//     SetNum(num - 1)
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={addBtn}>Add</button>
//       <button onClick={lessBtn}>less</button>
//     </div>
//   )
// }

// export default App