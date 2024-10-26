import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Overlap from "./components/Overlap/Overlap";

import Active from "./components/Active/Active";

function App() {
  const [prices, setPrices] = useState(0);
  const handlePrice = (price)=>{
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
      <Active isActives={isActives} handleIsActiveState={handleIsActiveState}></Active>
      
      <div >
        <div>
          <Overlap></Overlap>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
