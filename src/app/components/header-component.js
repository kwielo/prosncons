import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <header className="navbar">
        <section className="navbar-primary">
          <a className="navbar-brand mr-5" href="#"><strong>Pros</strong> <span className="text-italic">&</span> Cons</a>
        </section>
        <section className="navbar-section">
          <Link className="btn btn-link" to="/how-to">How to</Link>
          <NavLink className="btn btn-link" to="/about" activeClassName="active">About</NavLink>
        </section>
      </header>
    )
  }
}

export default Header;