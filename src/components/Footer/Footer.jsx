

const Footer = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
            <footer className="footer bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">About Us</h6>
    <p>We are a passionate team dedicated to providing the best services to our customers.</p>
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
        <span className="label-text text-white">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div className="md:join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered md:join-item" />
        <button className="btn btn-primary join-item bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-yellow-300 to-90% w-full md:w-auto">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
            </div>
        </div>
    );
};

export default Footer;