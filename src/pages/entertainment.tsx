const Entertainment = () => {
  return (
    <div className="row entertainment-background pb-5">
      <div className="col-lg-6 col-md-12 col-12 mt-5">
        <img className="children-image" src="../assets/children.jpg"></img>
      </div>
      <div className="col-lg-6 col-md-12 col-12  mt-5 ">
        <p className="Entertainment-text text-background-about-color mt-5">
          About Happy Kids
        </p>
        <p className="Entertainment-text text-background-entertainment-color">
          Entertainment
        </p>
        <p className="pe-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui
          enim, pharetra at auctor vitae.
        </p>
        <button className="btn">Read More</button>
      </div>
    </div>
  );
};
export { Entertainment };
