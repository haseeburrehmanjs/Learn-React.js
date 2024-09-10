import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const [products, setproducts] = useState(null)

  // fetch api data 
  useEffect(() => {
    async function getData() {
      let productData = await axios('https://jsonplaceholder.typicode.com/users')
      console.log(productData.data);
      setproducts(productData.data)
    }
    getData()
  }, [])

  function singalUserData(item){
    Navigate(`singaluser/:${item.id}`)
  }
  return (
    <>
      <div>{products ? <div>{products.map((item, index) => (
        <div className='p-5' key={index}>
          <h1 className='text-4xl font-bold'>{item.name}</h1>
          <p className='mt-3'>{item.email}</p>
          <button className='btn mt-3 mb-3 py-2 px-5 bg-black text-white' onClick={()=> singalUserData(index)}>Read More</button>
          <hr />
        </div>
      ))}</div> : <h1>Loading...</h1>}</div>
    </>
  )
}

export default Home
