import React, { Component } from 'react'


export class ChildNavBar extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <div style={{ color: "red" }}><b>Access Control</b></div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Assigned Members
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default ChildNavBar;