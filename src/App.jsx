import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Overlap from "./components/Overlap/Overlap";

import Active from "./components/Active/Active";

function App() {
  const [prices, setPrices] = useState(0);
  const handleDeletePrice = (pr)=>{
    if(pr > prices){
      
      return
    }
    setPrices(prices - pr);
  }
  const handlePrice = (price)=>{
    alert('successfully claim')
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
      
      <div className="relative">
      
        <div className="absolute ">
          <Overlap></Overlap>
          
        </div>
        <Footer></Footer>
      </div>
      
      
      
    </>
  );
}

export default App;
