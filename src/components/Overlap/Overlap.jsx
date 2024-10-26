import overlabbg from "../../assets/bg-shadow.png";

const Overlap = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto rounded-xl border  filter-blur">
        <div
          className="hero w-auto m-2 rounded-xl"
          style={{
            backgroundImage: `url(${overlabbg})`,
            backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          }}
        >
          <div className="hero-overlay bg-opacity-0"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl font-bold">
                Subscribe to our Newsletter
              </h1>
              <p className="mb-5">
                Get the latest updates and news right in your inbox!
              </p>
              <div>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlap;
