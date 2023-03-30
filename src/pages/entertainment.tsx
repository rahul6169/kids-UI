const Entertainment = () => {
  return (
    <div className="row entertainment-background pb-5" id="About">
      <div className="col-lg-6 col-md-12 col-12 mt-5">
        <img className="children-image" src="../assets/children.jpg"></img>
      </div>
      <div className="col-lg-6 col-md-12 col-12  mt-5 ">
        <p className="Entertainment-text text-background-about-color ms-5 mt-5">
          About Happy Kids
        </p>
        <p className="Entertainment-text text-background-entertainment-color mb-4 ms-5">
          Entertainment
        </p>
        <br></br>
        <div className="ms-5 me-5 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui
          enim, pharetra at auctor vitae.
        </div>
        <button className="btn ms-5">Read More</button>
      </div>
    </div>
  );
};
export { Entertainment };
