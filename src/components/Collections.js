import React, { useContext } from 'react'
import { myContext } from '../App'
import {AiOutlineArrowUp , AiOutlineArrowDown} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs';
import { toast } from 'react-toastify';

function Collections() {

    const {InCard,setInCard,AddCard,FindId} = useContext(myContext);

    const ArrowUp = (element)=>{        // increment quantité
        const copyInCard = [...InCard];
        copyInCard[FindId(element.id)]["quantité"] += 1 ;
        setInCard(copyInCard);
        toast.success(`You have now ${element.quantité} ${element.name}`)
    }

    const ArrowDown = (element)=>{      // decrement quantité
        if (element.quantité == 1){     // if there is 1 quantité remove the item from the bag
            const NewData = InCard.filter((ele)=>ele.id!==element.id);
            setInCard(NewData);
        }
        else{
            const copyInCard = [...InCard];
            copyInCard[FindId(element.id)]["quantité"] -= 1 ;
            setInCard(copyInCard);
            toast.error(`You have now only ${element.quantité} ${element.name} :(`)
        }
    }

    const Trash = (element)=>{       // remove item
        const newData = InCard.filter((ele)=>ele.id!==element.id);
        setInCard(newData);
        toast.error(`You deleted ${element.name} :(`)
    }

    const TotalPrice = InCard.reduce((start,curr)=>{return start + curr.price*curr.quantité},0)     // calculat total price

    console.log(TotalPrice)

    return (
        <div className='container overflow-x-auto'>
            <table className="table-auto divide-y divide-gray-200 mx-auto">
            <thead>
                <tr>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">#ID</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Name</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Image</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Quantité</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Price</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">SubTotal</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Action</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {
                InCard.map((ele)=>
                <>
                    <tr>
                        <th className="px-6 py-4 whitespace-nowrap" scope="row">{ele.id}</th>
                        <td className="px-6 py-4 whitespace-nowrap text-center font-mono underline text-xl">{ele.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap"><img className='mx-auto' src={ele.image} width={70}/></td>
                        <td className="px-6 py-4 whitespace-nowrap text-center"><div className='flex justify-center items-center'><AiOutlineArrowUp className='cursor-pointer' onClick={()=>ArrowUp(ele)} style={{marginRight : '5px'}}/>{ele.quantité}<AiOutlineArrowDown className='cursor-pointer' onClick={()=>ArrowDown(ele)} style={{marginLeft : '5px'}}/></div></td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">{ele.price}$</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">{ele.price * ele.quantité}$</td>
                        <td className="px-6 py-4 whitespace-nowrap text-2xl"><BsFillTrashFill className='text-sky-600 mx-auto cursor-pointer ;' onClick={()=>Trash(ele)}/></td>
                    </tr>
                </>
                )
            }
            </tbody>
            </table>
            <div className='flex items-center justify-end font-mono text-2xl'><p>Total : &nbsp;</p><p className='text-blue-700 underline font-bold '>{TotalPrice}$</p></div>
        </div>
    )
    }

    export default Collections