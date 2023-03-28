const Card = () => {
  return (
    <div className="row text-center">
      <div className="card-column col-lg-4 col-md-6">
        <div className="card card-playground-background-color">
          <div className="card-image">
            <img src="../assets/playground.png"></img>
          </div>
          <div className="card-body">
            <h2>Playground</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p>Read More</p>
          </div>
        </div>
      </div>
      <div className="card-column col-lg-4 col-md-6">
        <div className="card card-entertainment-background-color">
          <div className="">
            <img src="../assets/entertainment.png"></img>
          </div>
          <div className="card-body">
            <h2>Entertainment</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p>Read More</p>
          </div>
        </div>
      </div>
      <div className="card-column col-lg-4 col-md-12">
        <div className="card card-environment-background-color">
          <div className="">
            <img src="../assets/environment.png"></img>
          </div>
          <div className="card-body">
            <h2>Environment</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p>Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Card };
