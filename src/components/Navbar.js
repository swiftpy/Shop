import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { myContext } from '../App';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function Navbar() {

    const {InCard} = useContext(myContext);

  return (
    <div className='container h4 bg-dark p-4'>
        <Link className='m-3' to="/">Shop</Link>
        <Link to="/collections">Collections({InCard.length})<AiOutlineShoppingCart /></Link>
    </div>
  )
}

export default Navbar