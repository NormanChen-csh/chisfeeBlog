import React from 'react'
import { Component } from "react"
import { connect } from "dva"
import router from 'umi/router';

class ArticleItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
      // console.log(this.props)
  }

  toDetail = () => {
    router.push('/articleDetail')
  }

  render() {
    return (
      <div className="article-item">
        <h3 onClick={this.toDetail}>{this.props.title}</h3>
        <p>{this.props.time}</p>
      </div>
    )
  }
}

export default connect()(ArticleItem)  