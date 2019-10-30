import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div>
          <ul className="link">
            <li>Copyright © 2019</li>
            <li>Made with blood</li>
            <li>Call me daddy</li>
            <li>Mentions (presque) légales</li>
            <li>Cookies</li>
          </ul>
        </div>

        <div className="social">
          <img src="facebook.png" className="fcb" alt="Facebook logo" />
          <img src="instagram.png" className="insta" alt="Insta logo" />
          <img src="twitter.png" className="twitter" alt="Twitter logo" />
        </div>
      </footer>
    );
  }
}
export default Footer;
