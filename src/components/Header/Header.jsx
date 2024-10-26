import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";


const Header = ({handlePrice, prices}) => {
    return (
        <div>
            <Navbar prices={prices}></Navbar>
            <Banner handlePrice={handlePrice}></Banner>
        </div>
    );
};

export default Header;