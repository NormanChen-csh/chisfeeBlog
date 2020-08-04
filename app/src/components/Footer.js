import React from 'react';
import { Component } from "react"
import { connect } from "dva"

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
      // console.log(this.props)
  }
  render() {
    return (
      <footer className="footer-box">
        <hr/>
        <div className="contennt">
          <img className="avatar" src={require('@/assets/avatar.jpg')} alt=""/>
          <p className="copyright">© 2017 Chisfee</p>
          <p className="copyright">wechat: Chisfee_921</p>
          <p className="copyright">仰望星空 ，脚踏实地</p>
        </div>
      </footer>
    )
  }
}

export default connect()(Footer)  