import PropTypes from 'prop-types';
import bannerBg from "../../assets/bg-shadow.png";
import bannerImg from "../../assets/banner-main.png";

const Banner = ({handlePrice}) => {
  return (
    <div>
      <div
        className="hero min-h-screen w-11/12 mx-auto mt-6 rounded-xl bg-black"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>

        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className="items-center justify-center flex mb-6">
              <img src={bannerImg} alt="" />
            </div>
            <h1 className="mb-5 text-3xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5">Beyond Boundaries Beyond Limits</p>
            <div className="btn btn-lg bg-transparent px-0 border border-yellow-400 m-2">
              <button onClick={()=> handlePrice(999999)} className="btn btn-warning m-2 ">Claim Free Credit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes ={
  handlePrice: PropTypes.func.isRequired
}

export default Banner;
