import React,{createContext, useState} from 'react';
import './App.css';

import Home from './components/Home';
import Collections from './components/Collections';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import { toast ,  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const myContext = createContext(); // start my context

function App() {

  const [InCard,setInCard] = useState([]);

  const products=[
    {id:1,name:"pc",price:1000,image:'https://ae01.alicdn.com/kf/S182bd2442a6243f6989f394a62e6d1f4i/DERE-Ordinateur-portable-Lapmedicents-M16-ordinateur-portable-de-bureau-d-%C3%A9tude-ordinateur-portable-Windows-11-16.jpg_220x220.jpg_.webp'},
    {id:2,name:"phone",price:800,image:'https://ae01.alicdn.com/kf/Sa848468f6ba44b36b9bc56ab2379497fO/Smartphone-S23-Ultra-Snapdragon-888-16-Go-1-To-6800mAh-48MP-72MP-r%C3%A9seau-4G-5G-t%C3%A9l%C3%A9phone.jpg_220x220.jpg_.webp'},
    {id:3,name:"smart watch",price:500,image:'https://ae01.alicdn.com/kf/S86a74d4ba1284a14be399d282a088de6B/Montre-intelligente-%C3%A0-%C3%A9cran-Amoled-pour-hommes-et-femmes-Ultra-8-Pro-MAX-Isabel-2-taux.jpg_220x220.jpg_.webp'},
    {id:4,name:"écouteur bluetooth",price:400,image:'https://ae01.alicdn.com/kf/Se9ad3eb7c3e94569b7215a9843997779V/Apple-%C3%89couteurs-intra-auriculaires-sans-fil-Bluetooth-AirPods-Pro2-%C3%A9couteurs-de-sport-%C3%A9couteurs-de-jeu-iPhone.jpg_220x220.jpg_.webp'},
    {id:5,name:"e-BOOK",price:400,image:'https://ae01.alicdn.com/kf/S4408fc2b9b44457ea71c176da54cf860r/Tablette-PC-tactile-Pad-6-Pro-Android-13-Snapdragon-2023-10-c%C5%93urs-16-Go-233-Go.jpg_220x220.jpg_.webp'},
    {id:5,name:"Bike",price:1500,image:"https://ae01.alicdn.com/kf/S5915c0f006ad44b4a0ea96a2fabe1607M/HYGGE-Cadre-de-disque-de-v%C3%A9lo-en-fibre-de-carbone-supports-de-freins-V-brake-mod%C3%A8le.jpg_220x220.jpg_.webp"},
    {id:6,name:"Pc Gamer",price:2000,image:'https://ae01.alicdn.com/kf/Sff0d14fe0ee54f03ac6f4c8765cfd2c5z/Chatreey-Mini-PC-de-jeu-avec-%C3%A9clairage-color%C3%A9-AMR5-AM08-Ryzen-5-5800U-R7-7735HS-680M.jpg_220x220.jpg_.webp'},
    {id:7,name:"Mouse gaming",price:750,image:'https://ae01.alicdn.com/kf/Scde43a7ce6734696822f31976754364ds/LOGITECH-G-Souris-de-jeu-G102-RGB-design-l%C3%A9ger-ergonomique-deuxi%C3%A8me-g%C3%A9n%C3%A9ration-pour-ordinateur-200-8000.jpg_220x220.jpg_.web'},
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
    <div className='container mx-auto'>
      <BrowserRouter>
        <myContext.Provider value={{products,AddCard,InCard,setInCard,FindId}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
          {/* <Footer /> */}
        </myContext.Provider>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
