import { useState } from "react";

const Star = () => {
  const [state, setState] = useState("Activity");
  console.log(state);
  return (
    <>
      <div className="row text-center p-5 ">
        <div className="col-lg-3 col-sm-4 col-6 mb-4">
          <div className="text-boxes" onClick={() => setState("Activity")}>
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-star mb-2"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
              <br></br>
              Activity
            </h2>
          </div>
        </div>

        <div className="col-lg-2  col-sm-4 col-6">
          <div className="text-boxes" onClick={() => setState("Music")}>
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-star mb-2"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
              <br></br> Music
            </h2>
          </div>
        </div>

        <div className="col-lg-2  col-sm-4 col-6 mb-4">
          <div className="text-boxes" onClick={() => setState("Party")}>
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-star mb-2"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
              <br></br>Party
            </h2>
          </div>
        </div>

        <div className="col-lg-2  col-sm-6 col-6">
          <div className="text-boxes" onClick={() => setState("Yoga")}>
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-star mb-2"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
              <br></br>Yoga
            </h2>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 col-12">
          <div className="text-boxes" onClick={() => setState("Holidays")}>
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-star mb-2"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
              <br></br>Holidays
            </h2>
          </div>
        </div>
      </div>

      {state == "Activity" ? (
        <div className="row p-5">
          <div className="col-lg-6  col-md-12 col-sm-12 ">
            <h2 className="lorem-ipsum-star-text text-start">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="lorem-ipsum-text text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              laudantium in adipisci ipsa optio quas id excepturi non, eos
              cupiditate
            </p>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images "
                src="../assets/activityrooms.png"
                alt=""
              />
              Outdoor Activity
            </div>
            <div className="align-items-images star-text-points pt-4">
              <img
                className="star-images "
                src="../assets/education.png"
                alt=""
              />
              Drawing Course
            </div>

            <div className="align-items-images star-text-points pt-4">
              <img
                className="star-images  "
                src="../assets/birthdayparty.png"
                alt=""
              />
              Playground
            </div>

            <div className="align-items-images star-text-points pt-4">
              <img
                className="star-images"
                src="../assets/education.png"
                alt=""
              />
              Drawing course
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <img className="pic-widthh" src="../assets/gallery6.jpg"></img>
          </div>
        </div>
      ) : state == "Music" ? (
        <div className="row p-5 ">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img className="pic-widthh" src="../assets/gallery3.jpg"></img>
          </div>

          <div className="col-lg-6  col-md-12 col-sm-12 ">
            <h2 className="lorem-ipsum-star-text text-start">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="lorem-ipsum-text text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              laudantium in adipisci ipsa optio quas id excepturi non, eos
              cupiditate
            </p>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images "
                src="../assets/activityrooms.png"
                alt=""
              />
              Outdoor Activity
            </div>
            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images "
                src="../assets/education.png"
                alt=""
              />
              Drawing Course
            </div>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images  "
                src="../assets/birthdayparty.png"
                alt=""
              />
              Playground
            </div>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images"
                src="../assets/education.png"
                alt=""
              />
              Drawing course
            </div>
          </div>
        </div>
      ) : state == "Party" ? (
        <div className="row p-5 ">
          <div className="col-lg-6  col-md-12 col-sm-12 ">
            <h2 className="lorem-ipsum-star-text text-start">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="lorem-ipsum-text text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              laudantium in adipisci ipsa optio quas id excepturi non, eos
              cupiditate
            </p>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images "
                src="../assets/activityrooms.png"
                alt=""
              />
              Outdoor Activity
            </div>
            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images "
                src="../assets/education.png"
                alt=""
              />
              Drawing Course
            </div>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images  "
                src="../assets/birthdayparty.png"
                alt=""
              />
              Playground
            </div>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images"
                src="../assets/education.png"
                alt=""
              />
              Drawing course
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <img className="pic-widthh" src="../assets/party.jpg"></img>
          </div>
        </div>
      ) : state == "Yoga" ? (
        <div className="row p-5 ">
          <div className="col-lg-6  col-md-12 col-sm-12 ">
            <h2 className="lorem-ipsum-star-text text-start">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="lorem-ipsum-text text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              laudantium in adipisci ipsa optio quas id excepturi non, eos
              cupiditate
            </p>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images "
                src="../assets/activityrooms.png"
                alt=""
              />
              Outdoor Activity
            </div>
            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images "
                src="../assets/education.png"
                alt=""
              />
              Drawing Course
            </div>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images  "
                src="../assets/birthdayparty.png"
                alt=""
              />
              Playground
            </div>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images"
                src="../assets/education.png"
                alt=""
              />
              Drawing course
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <img className="pic-widthh" src="../assets/gallery6.jpg"></img>
          </div>
        </div>
      ) : state == "Holidays" ? (
        <div className="row p-5 ">
          <div className="col-lg-6  col-md-12 col-sm-12 ">
            <h2 className="lorem-ipsum-star-text text-start">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="lorem-ipsum-text text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              laudantium in adipisci ipsa optio quas id excepturi non, eos
              cupiditate
            </p>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images "
                src="../assets/activityrooms.png"
                alt=""
              />
              Outdoor Activity
            </div>
            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images "
                src="../assets/education.png"
                alt=""
              />
              Drawing Course
            </div>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images  "
                src="../assets/birthdayparty.png"
                alt=""
              />
              Playground
            </div>

            <div className="align-items-images star-text-points pt-3">
              <img
                className="star-images"
                src="../assets/education.png"
                alt=""
              />
              Drawing course
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <img className="pic-widthh" src="../assets/party.jpg"></img>
          </div>
        </div>
      ) : null}
    </>
  );
};
export { Star };
