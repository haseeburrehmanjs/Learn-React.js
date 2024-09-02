// function Card() {
//     return (
//         <>
//             <div className="card bg-base-100 w-96 shadow-xl">
//                 <figure>
//                     <img
//                         src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                         alt="Shoes" />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title">
//                         Shoes!
//                         <div className="badge badge-secondary">NEW</div>
//                     </h2>
//                     <p>If a dog chews shoes whose shoes does he choose?</p>
//                     <div className="card-actions justify-end">
//                         <div className="badge badge-outline">Fashion</div>
//                         <div className="badge badge-outline">Products</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Card



import React from 'react'

const Card = ({title, description, price, img}) => {
  return (
    <div>
      <div className='ms-3 w-[200px] p-2 shadow-lg rounded-md py-3'>
      <div className='overflow-hidden w-[185px] h-[185px] rounded-md'>
        <img  className='rounded-md' src={img} alt="" />
      </div>
      <div>
        <h1 className='text-xl font-bold mt-2'>{title}</h1>
        <p className='mt-2'>{description}</p>
        <p className='font-bold mt-2'>Rs :{price}</p>
      </div>
      </div>
    </div>
  )
}

export default Card
