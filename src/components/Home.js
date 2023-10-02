import React, { useContext } from 'react';
import { myContext } from '../App';


function Home() {

const {products,AddCard} = useContext(myContext);      


  return (
    <div className='flex items-center'>
      <div className='grid grid-cols-1 medium:grid-cols-2 pc:grid-cols-3 pclarge:grid-cols-4 gap-3 mt-10 mx-auto'>
          {products.map((ele)=>
              <div className='flex flex-col items-center p-4 gap-2 bg-slate-50 rounded-md w-full' style={{width:'18rem'}} title={ele.name}>
                  <img className='h-auto rounded-lgh-[0%] rounded-md' src={ele.image} />
                  <div className='w-full flex justify-between items-center'><p className='font-semibold underline text-base text-gray-900'>{ele.price}$</p><button className='bg-sky-500 text-white p-2 rounded-md hover:bg-sky-600' onClick={()=>AddCard(ele)}>Add Card</button></div>
              </div>
          )}
      </div>
    </div>
  )
}

export default Home