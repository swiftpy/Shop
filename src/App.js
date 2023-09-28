import React,{createContext, useState} from 'react';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Collections from './components/Collections';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { toast ,  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const myContext = createContext(); // start my context

function App() {

  const [InCard,setInCard] = useState([]);

  const products=[
    {id:1,name:"pc",price:1000,image:'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__340.jpg'},
    {id:2,name:"phone",price:800,image:'https://cdn.pixabay.com/photo/2014/12/11/12/10/smartphone-564152__340.jpg'},
    {id:3,name:"smart watch",price:500,image:'https://cdn.pixabay.com/photo/2015/08/15/15/21/smart-watch-889639__340.jpg'},
    {id:4,name:"écouteur bluetooth",price:400,image:'https://cdn.pixabay.com/photo/2018/04/23/14/14/bluetooth-headset-3344348__340.png'},
    {id:5,name:"e-BOOK",price:400,image:'https://cdn.pixabay.com/photo/2018/10/04/14/22/rain-3723749__340.jpg'},
  ]
    // functions

    const AddCard = (element)=>{ // add to my bag
      if (FindId(element.id) === -1){     // if the item not in my bag
        const CardInfo = {
          id : element.id,
          quantité : 1,
          image : element.image,            // better to create all functions here and share it with useContext hook with other componenets
          name : element.name,
          price : element.price
        }
        setInCard([...InCard,CardInfo])
        toast.success(`${element.name} added to your bag`)
      }
      else{       // if in my bag increment quantité
        const copyInCard = [...InCard];
        copyInCard[FindId(element.id)]["quantité"] += 1 ;
        setInCard(copyInCard);
        toast.success(`You have now ${copyInCard[FindId(element.id)]["quantité"]} ${element.name}`)
      }
    }

    const FindId = (id)=>{
      return InCard.findIndex((ele)=>ele.id===id);
    }

  return (
      <BrowserRouter>
        <myContext.Provider value={{products,AddCard,InCard,setInCard,FindId}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
          </Routes>
        </myContext.Provider>
        <ToastContainer />
      </BrowserRouter>
  );
}

export default App;
