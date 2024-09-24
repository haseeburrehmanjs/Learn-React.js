import React from 'react'
import { useForm } from "react-hook-form"

const Layout = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  return (
    <div className='container mx-auto mt-5'>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit(register)}>
        <input className='border p-2' type="text" placeholder='enter email'{...register("email", { required: true })} />
        <h6>{errors.email && <span className='text-red-600'>This field is required</span>}</h6>
        <input className='border p-2' type="text" placeholder='enter password' {...register("password", { required: true })} />
        <h6>{errors.password && <span className='text-red-600'>This field is required</span>}</h6>
        <button className='bg-blue-600 p-3 text-white'>Submit</button>
      </form>
    </div>
  )
}

export default Layout
