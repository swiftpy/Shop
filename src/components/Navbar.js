import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { myContext } from '../App';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import '../App.css'

function Navbar() {

    const {InCard} = useContext(myContext);

  return (
    <div className='flex w-full font-semibold text-slate-900 px-5 py-3 justify-between rounded-b-sm'>
        <Link className='text-2xl medium:text-[35px] font-extrabold' to="/">Shop</Link>
        <Link to="/collections" className='flex items-center'><AiOutlineShoppingCart className='text-[30px] medium:text-2xl'/>({InCard.length})</Link>
    </div>
  )
}

export default Navbar