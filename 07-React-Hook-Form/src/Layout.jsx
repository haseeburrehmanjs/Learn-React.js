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
    <div>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit(register)}>
        <input type="text" placeholder='enter email'{...register("email", { required: true })} />
        <h6>{errors.email && <span className='text-red-600'>This field is required</span>}</h6>
        <input type="text" placeholder='enter password' {...register("password", { required: true })} />
        <h6>{errors.password && <span>This field is required</span>}</h6>
        <button>subbmit</button>
      </form>
    </div>
  )
}

export default Layout
