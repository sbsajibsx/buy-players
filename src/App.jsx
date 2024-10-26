import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


import Active from "./components/Active/Active";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [prices, setPrices] = useState(0);
  const handleDeletePrice = (pr)=>{
    if(pr > prices){
      toast.warn('not enought coin', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        
        });
      return
    }
    setPrices(prices - pr);
  }
  const handlePrice = (price)=>{
    toast.success('Successfully Claim Coin', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      
      });
    const newPrice = prices + price;
    setPrices(newPrice);
    
  }
const [isActives, setIsActives] = useState( {
  available: true,
  status: "available"
} )
const handleIsActiveState =(status)=>{
  if(status == 'available'){
    setIsActives( {
      available: true,
      status: "available"
    } )
  }
  else{
    setIsActives({
      available: false,
      status: "selected"
    })
  }
}

  return (
    <>
      <Header handlePrice={handlePrice} prices={prices}></Header>
      <Active prices={prices} handleDeletePrice={handleDeletePrice} isActives={isActives} handleIsActiveState={handleIsActiveState}></Active>
      <Footer></Footer>
      
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      
    </>
  );
}

export default App;
