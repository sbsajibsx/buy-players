import PropTypes from 'prop-types';
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

Header.propTypes ={
    handlePrice: PropTypes.func.isRequired,
    prices: PropTypes.object.isRequired
}

export default Header;