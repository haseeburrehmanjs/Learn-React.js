import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/productCard'
import { CircularProgress } from '@mui/material'

const Product = () => {
  const [products, setproducts] = useState([])


  // use effect for get data from api
  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then(responce => {
        console.log(responce.data.products);
        setproducts(responce.data.products)
      }).catch(error => {
        console.log(error);
      })
  }, [])


  return (
    <>
      <div className='container mx-auto'>
        {products ? <div className='ml-8 flex flex-wrap gap-2 mt-4'>{products.map(item => (
          <ProductCard key={item.id} item={item}/>
        ))}</div> : <CircularProgress color="secondary" />}
      </div>
    </>
  )
}

export default Product
