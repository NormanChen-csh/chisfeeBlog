import React from 'react'
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
      <header style={{ backgroundImage: `url(${this.props.pic})` }}>
        <div className="container minwidth960">
          <div className="site-heading">
            <h1>{ this.props.title }</h1>
            {
              this.props.route === 'home' ? <hr className="small" />:''
            }
            <span className="subheading">{ this.props.secTitle }</span>
          </div>
        </div>
      </header>
    )
  }
}

export default connect()(Header)  