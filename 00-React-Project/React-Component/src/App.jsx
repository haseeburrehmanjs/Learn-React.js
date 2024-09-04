// import Card from "./Components/card"
// import Navbar from "./Components/navbar"
// import Button from "./Components/Button"

// function App() {
//     return (
//         <>
//             <Navbar />
//             <Button />
//             <div className="flex justify-between mx-4 mt-4">
//                 <Card />
//                 <Card />
//                 <Card />
//             </div>
//         </>
//     )
// }

// export default App



import React from 'react'
import Card from './Components/card'
import axios from 'axios'

const App = () => {

    axios('https://api.escuelajs.co/api/v1/products?offset=10&limit=10')
    .then(responce => {
        // console.log(responce);
        let data = responce.data
        console.log(data);
        
    })
    .catch(error => {
        console.log(error);   
    })


  return (
    <>
      <h1 className='text-center py-5 text-4xl font-bold font-serif'>Best Mobile in 2025</h1>
      <div className='flex flex-wrap justify-between px-[100px] mt-3'>
      <Card img='https://i.pinimg.com/564x/ca/88/7b/ca887b908b989e8358e3a3000184d9b7.jpg' title='Iphone Xs Max' description='Best mobile in 2023...' price='180000'/>
      <Card img='https://i.pinimg.com/564x/c5/9a/e0/c59ae0577fa29074149172ecb8d80c69.jpg' title='Iphone 11 Pro Max' description='Best mobile in 2023...' price='300000'/>
      <Card img='https://i.pinimg.com/564x/a6/d9/f1/a6d9f1a4c633e7cd897e2d867d6f2448.jpg' title='Iphone 13 Pro Max' description='Best mobile in 2023...' price='230000'/>
      <Card img='https://i.pinimg.com/564x/61/43/7e/61437e16ea05c75b79d8b91cbd009e35.jpg' title='Iphone 7 plus' description='Best mobile in 2023...' price='1200000'/>
      <Card img='https://i.pinimg.com/564x/03/28/de/0328de166a3476acb54335d909bac6fa.jpg' title='Iphone 7 Black' description='Best mobile in 2023...' price='130000'/>
      <Card img='https://i.pinimg.com/564x/ca/88/7b/ca887b908b989e8358e3a3000184d9b7.jpg' title='Iphone Xs Max' description='Best mobile in 2023...' price='340000'/>
      <Card img='https://i.pinimg.com/564x/c5/9a/e0/c59ae0577fa29074149172ecb8d80c69.jpg' title='Iphone 11 Pro Max' description='Best mobile in 2023...' price='2320000'/>
      <Card img='https://i.pinimg.com/564x/a6/d9/f1/a6d9f1a4c633e7cd897e2d867d6f2448.jpg' title='Iphone 13 Pro Max' description='Best mobile in 2023...' price='180000'/>
      <Card img='https://i.pinimg.com/564x/61/43/7e/61437e16ea05c75b79d8b91cbd009e35.jpg' title='Iphone 7 plus black' description='Best mobile in 2023...' price='320000'/>
      <Card img='https://i.pinimg.com/564x/03/28/de/0328de166a3476acb54335d909bac6fa.jpg' title='Iphone Xs Max' description='Best mobile in 2023...' price='430000'/>
      </div>
    </>
  )
}

export default App
