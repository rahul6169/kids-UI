import {
  faBehance,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = () => (
  <div className="row justify-content-center">
    <div className="move-upside col-1 div-size">
      <div className="text-center mb-5">
        <FontAwesomeIcon
          className="font-icon-twitter twitter-hover  p-2 m-2"
          icon={faTwitter}
        />
      </div>
    </div>

    <div className="move-upside col-1 div-size">
      <div className="text-center mb-5">
        <FontAwesomeIcon
          className="font-icon-facebook twitter-hover  p-2 m-2"
          icon={faFacebook}
        />
      </div>
    </div>

    <div className="move-upside col-1 div-size">
      <div className="text-center mb-5">
        <FontAwesomeIcon
          className="font-icon-instagram twitter-hover  p-2 m-2"
          icon={faInstagram}
        />
      </div>
    </div>

    <div className="move-upside col-1 div-size">
      <div className="text-center mb-5">
        <FontAwesomeIcon
          className="font-icon-youtube twitter-hover  p-2 m-2"
          icon={faYoutube}
        />
      </div>
    </div>

    <div className="move-upside col-1 div-size">
      <div className="text-center mb-5">
        <FontAwesomeIcon
          className="font-icon-behance twitter-hover  p-2 m-2"
          icon={faBehance}
        />
      </div>
    </div>
  </div>
);
export { Icons };
