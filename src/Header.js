import React, { Component } from 'react';
import './Header.css';
import Social from './Social';
import Scroll from 'react-scroll';
const Link = Scroll.Link;



class Header extends Component {
  render() {
    return (
      <header className="header">
          <div className="header-text">
            <h1 className="header-title">Hi, I'm Stella :)</h1>
            <p className="header-subtitle">I'm a full stack software engineer. I love solving tough problems and building cool products.</p>
          </div>
          <Social
            iconColor='icon-white'
          />
          <div className="header-learnmore">
            <h3>Learn more</h3>
            <Link
            activeClass="active"
            to="skills-element"
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}>
              <img src="/images/chevron-down.png" alt="arrow pointing down to rest of content"/>
            </Link>
          </div>
      </header>
    );
  }
}

export default Header;
