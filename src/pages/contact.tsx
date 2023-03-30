const Contact = () => {
  return (
    <>
      <div className="row ps-5 mb-5 pb-5">
        <div className="col-lg-6">
          <iframe
            className="google-map"
            style={{ width: "90%", height: "100%" }}
            // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEIpgj38KyLFELm2bK9Y7krBkz1K-cMq8&amp;q=place_id:ChIJn6wOs6lZwokRLKy1iqRcoKw"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tiruchengode+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className="col-lg-6">
          <h2 className="lorem-ipsum-star-text text-background-about-color">
            Contact me
          </h2>

          <p className="lorem-ipsum-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <input
            type="text"
            placeholder="Your name *"
            className="input-box-contact-page mb-4"
            required
          ></input>
          <input
            type="email"
            placeholder="Your E-mail *"
            className="input-box-contact-page mb-4"
            required
          ></input>
          <textarea
            placeholder="Message"
            className="input-box-contact-page mb-4"
          ></textarea>

          <button className="btn">Post A Comment</button>
        </div>
      </div>
    </>
  );
};
export { Contact };
