const Time = () => {
  return (
    <>
      <div className="time-background">
        <svg
          className="svg-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1428 94.61"
        >
          <g id="Layer_3" data-name="Layer 3">
            <path
              className="cls-1"
              d="M-83,10"
              transform="translate(83 33)"
            ></path>
            <path
              className="cls-2"
              d="M986.33,46.5s132.5-37,318,0C1304.33,46.5,1200.83,80.5,986.33,46.5Z"
              transform="translate(83 33)"
            ></path>
          </g>
          <g id="Layer_4" data-name="Layer 4">
            <path
              className="cls-2"
              d="M-83,10S127,65.11,394,30.06,986.33,46.5,986.33,46.5,1218,83,1345,38V-33H-83Z"
              transform="translate(83 33)"
            ></path>
          </g>
        </svg>
        <div className="row pt-5 pb-5 text-center">
          <div className="col-lg-3 col-md-6 col-sm-12 pt-5  time-number-text">
            284
            <p className="time-hour-text">Months</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pt-5 time-number-text">
            163
            <p className="time-hour-text">Ideas</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pt-5 time-number-text">
            853
            <p className="time-hour-text"> Hours</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pt-5 time-number-text">
            734
            <p className="time-hour-text">Programs</p>
          </div>
        </div>
        <svg
          className="svg-1"
          id="curve"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1428 130.87"
        >
          <path
            className="cls-1"
            d="M-83,345V288s158-27,262-22l104,5,138,8,300,21s245,4,281-5c0,0-9-39,33-45,0,0,8-51,58-25,0,0,48-36,61,23,0,0,27,2,28,24,0,0,163-22,163-17v90Z"
            transform="translate(83 -214.13)"
          ></path>
        </svg>
      </div>
    </>
  );
};
export { Time };
