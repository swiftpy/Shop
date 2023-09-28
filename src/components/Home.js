import React, { useContext } from 'react';
import { myContext } from '../App';


function Home() {

const {products,AddCard} = useContext(myContext);      


  return (
    <div className='container d-flex flex-wrap justify-content-center' style={{gap:'20px'}}>
        {products.map((ele)=>
            <div className='card d-flex flex-column justify-content-between' style={{width:'18rem'}}>
                <img className='card-img-top' src={ele.image} />
                <div className='d-flex card-title' style={{justifyContent:'space-between'}}><p>{ele.name}</p><p>price : {ele.price}</p><button className='btn btn-primary' onClick={()=>AddCard(ele)}>Add Card</button></div>
            </div>
        )}
    </div>
  )
}

export default Home