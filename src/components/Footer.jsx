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
          <a
            title="BigDaddyFcb"
            href="https://www.facebook.com/profile.php?id=100023861071017"
          >
            <img src="facebook.png" className="fcb" alt="Facebook logo" />
          </a>
          <a
            title="BigDaddyInsta"
            href="https://www.instagram.com/therealcharlesmanson/"
          >
            <img src="instagram.png" className="insta" alt="Insta logo" />
          </a>
          <a
            title="BigdaddyTwitter"
            href="https://twitter.com/heltershelter?lang=fr"
          >
            <img src="twitter.png" className="twitter" alt="Twitter logo" />
          </a>
        </div>
      </footer>
    );
  }
}
export default Footer;
