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
        <div className='container'>
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Quantité</th>
                    <th scope="col">Price</th>
                    <th scope="col">SubTotal</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                InCard.map((ele)=>
                <>
                    <tr>
                    <th scope="row">{ele.id}</th>
                    <td>{ele.name}</td>
                    <td><img src={ele.image} width={70}/></td>
                    <td><AiOutlineArrowUp onClick={()=>ArrowUp(ele)} style={{marginRight : '5px'}}/>{ele.quantité}<AiOutlineArrowDown onClick={()=>ArrowDown(ele)} style={{marginLeft : '5px'}}/></td>
                    <td>{ele.price}</td>
                    <td>{ele.price * ele.quantité}</td>
                    <td><BsFillTrashFill onClick={()=>Trash(ele)}/></td>
                    </tr>
                </>
                )
            }
            </tbody>
            </table>
            <div className='text-center d-flex flex-row justify-content-center'><p>Total : </p><p className='text-primary'>&nbsp;{TotalPrice}</p></div>
        </div>
    )
    }

    export default Collections