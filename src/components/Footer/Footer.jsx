import logo from "../../assets/logo.png";
import footerBg from "../../assets/bg-shadow.png";
const Footer = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto md:relative">
        <div className="border-2 md:absolute  w-11/12 mx-auto -top-24 left-16 rounded-xl">
          <div
            className="hero w-auto m-6 rounded-xl bg-white"
            style={{
              backgroundImage: `url(${footerBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="hero-overlay bg-opacity-0"></div>

            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold text-black">
                  Subscribe to our Newsletter
                </h1>
                <p className="mb-5 text-black">
                  Get the latest updates and news right in your inbox!
                </p>
                <div className="md:flex">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <button className="btn btn-active bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ml-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className=" bg-neutral text-neutral-content p-10 md:pt-52 border-b-2">
          <div className="flex justify-center mb-6">
            <img className="w-44" src={logo} alt="" />
          </div>
          <div className="footer">
            <nav>
              <h6 className="footer-title">About Us</h6>
              <p>
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </nav>
            <nav>
              <h6 className="footer-title">Quick Links</h6>
              <a className="link link-hover">Home</a>
              <a className="link link-hover">Services</a>
              <a className="link link-hover">About</a>
              <a className="link link-hover">Contact</a>
            </nav>
            <form>
              <h6 className="footer-title">Subscribe</h6>
              <fieldset className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Subscribe to our newsletter for the latest updates.
                  </span>
                </label>
                <div className="md:join">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered md:join-item"
                  />
                  <button className="btn btn-primary join-item bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-yellow-300 to-90% w-full md:w-auto">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </footer>

        <footer className="footer footer-center bg-neutral text-base-content p-4">
          <aside>
            <p className="text-white">
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
