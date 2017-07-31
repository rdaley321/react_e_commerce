import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return(
      <div>
        <label htmlFor="show-menu" className="show-menu">Show Menu</label>
        <input type="checkbox" id="show-menu" role="button" />
        <ul id="menu">
          <li><a href="#">Home</a></li>
          <li>
              <a href="#">Categories</a>
              <ul className="hidden">
                  <li><a href="#">Who We Are</a></li>
                  <li><a href="#">What We Do</a></li>
              </ul>
          </li>
          <li>
              <a href="#">Portfolio</a>
              <ul className="hidden">
                  <li><a href="#">Photography</a></li>
                  <li><a href="#">Web & User Interface Design</a></li>
                  <li><a href="#">Illustration</a></li>
              </ul>
          </li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    )
  }
}
