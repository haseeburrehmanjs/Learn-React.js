import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, less, ubdate } from './Redux/counterSlice'

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
    counter is {count}
    <button onClick={()=> dispatch(add())}>add</button>
    <button onClick={()=> dispatch(less())}>add</button>
    <button onClick={()=> dispatch(ubdate())}>add</button>
    </div>
  )
}

export default App