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
            <li>
              <a
                title="woawIncredibleAmazing"
                href="https://ca.slack-edge.com/T6SG2QGG2-UJPQ3D6R0-eaac16dac1f8-512"
              >
                Copyright © 2019
              </a>
            </li>
            <li>
              <a title="head" href="http://i.imgur.com/TuaWHee.jpg">
                Made with blood
              </a>
            </li>
            <li>
              <a
                title="daddyIsBack"
                href="https://giphy.com/gifs/jack-nicholson-the-shining-heres-johnny-l3V0G6RGynhmcetpK/fullscreen"
              >
                Call me daddy
              </a>
            </li>
            <li>
              <a
                title="NSFW"
                href="https://ca.slack-edge.com/T6SG2QGG2-UKBHQ4VMM-2d4ed6baac2f-512"
              >
                Mentions (presque) légales
              </a>
            </li>
            <li>
              <a
                title="mingeTinCookieLô"
                href="https://orteil.dashnet.org/cookieclicker/"
              >
                Cookies
              </a>
            </li>
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
