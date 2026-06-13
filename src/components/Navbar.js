import React from 'react'
import { Link } from "react-router-dom";

import PropTypes from 'prop-types'

export default function Navbar(props) {

  return (

    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className={`form-check form-switch d-flex jc-right text-${props.mode === 'light' ? 'dark' : 'light'}`} >
            <input className="form-check-input m-auto mx-2" onClick={props.toggletheme} type="checkbox" role="switch" id="switchCheckDefault" />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'} m-auto`} htmlFor="switchCheckDefault" >{props.mode === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          </div>
        </div>

      </div>

    </nav>
  )
};


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'about text here'
};