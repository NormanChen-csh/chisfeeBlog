import React from 'react';
import { Component } from "react"
import { connect } from "dva"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
      // console.log(this.props)
  }
  render() {
    return (
      <nav className="page-header minwidth960">
        <div className="logo-area header-font">Chisfee💫</div>
        <div className="nav-item header-font">
          <div className="item">
            HOME
          </div>
          <div className="item">
            ARTICLE
          </div>
          <div className="item">
            DAILY
          </div>
          <div className="item">🐮</div>
        </div>
      </nav>
    )
  }
}

export default connect()(Header)  