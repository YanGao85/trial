import React, { Component } from "react";
import "./Header.css";
import Social from "./Social";
import Scroll from "react-scroll";
const Link = Scroll.Link;

class Header extends Component {
  render() {
    return (
      <header className="header fadeIn">
        <div className="header-text">
          <h1 className="header-title">Greetings, My name is Yan</h1>
          <p className="header-subtitle">
            I'm a just a guy who wants to build cool stuffs. I love solving
            challenging algorithm and fixing bugs.
          </p>
          <p className="header-subtitle">Also a passionate Licensed Optician</p>
        </div>
        <Social iconColor="icon-white" />
        <div className="header-learnmore pulse">
          <h3>Learn more</h3>
          <Link
            activeClass="active"
            to="skills-element"
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
          >
            <i
              className="fa fa-chevron-down chevron-down fa-2x"
              aria-hidden="true"
            ></i>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
