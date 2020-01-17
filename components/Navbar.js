import Link from 'next/link';
import React, { Component } from 'react'

const NavBar = () => (
  <nav className="navbar navbar-expand-md fixed-top">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#TopNavbar"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i className="fas fa-bars fa-2x"></i></span>
    </button>
    <Link href="/"><a
      className="nav-item nav-link">
      <img
        src="../static/code.svg"
        width="30"
        height="30"
        alt="jOlivier Logo"
      /> jOlivier</a>
    </Link>
    <div className="collapse navbar-collapse " id="TopNavbar">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link href="/"><a className="nav-item nav-link">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/about"><a className="nav-item nav-link">About</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/projects"><a className="nav-item nav-link">Projects</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/contact"><a className="nav-item nav-link">Contact</a></Link>
        </li>
      </ul>
    </div>
    <style jsx>
      {`
        nav {
          width: 100%;
          background: -webkit-linear-gradient(
            to bottom,
            #4286f4,
            #373b44
          );
          background: linear-gradient(
            to bottom,
            #4286f4,
            #373b44
          );
        },
        .nav-item nav-link {
          font-weight: bold;
          color: white;
          font-size: 18px;
        }
      `}
    </style>
  </nav>
)

export default NavBar