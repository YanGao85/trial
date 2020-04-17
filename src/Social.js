import React, { Component } from "react";
import "./Social.css";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialLinks: [
        {
          name: "GitHub",
          image: "./images/github.png",
          fa: "fa-github",
          link: "https://github.com/YanGao85",
        },
        {
          name: "Stack Overflow",
          image: "./images/stackoverflow.png",
          fa: "fa-stack-overflow",
          link: "https://stackoverflow.com/users/story/13282478",
        },
        {
          name: "Twitter",
          image: "./images/twitter.png",
          fa: "fa-twitter",
          link: "https://twitter.com/Mattgao",
        },
        {
          name: "LinkedIn",
          image: "./images/linkedin.png",
          fa: "fa-linkedin",
          link: "https://www.linkedin.com/in/yanpgao",
        },
      ],
    };
  }

  render() {
    const socialLinks = this.state.socialLinks;
    return (
      <div className="social-links">
        {socialLinks.map((social) => (
          <div className="social-link" key={social.name}>
            <a
              href={social.link}
              className={this.props.iconColor}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/*<img src={social.image} alt={social.name}/> */}
              <i className={`fa ${social.fa}`} aria-hidden="true"></i>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Social;
