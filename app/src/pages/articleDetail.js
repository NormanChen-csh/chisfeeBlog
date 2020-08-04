import React from 'react';
import { Component } from "react"
import { connect } from "dva"
import Header from '@/components/common/Header';

class ArticleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeTitle: {
        title: "如何成为一个合格的大前端",
        secTitle: '2020.8.2',
        pic: require('@/assets/article-bg.jpg')
      }
    }
  }

  componentDidMount() {
      // console.log(this.props)
  }
  render() {
    let  { title, secTitle, pic } = this.state.homeTitle
    return (
      <div className="article-detail">
        <Header route={''} title={title} secTitle={secTitle} pic={pic}/>
      </div>
    )
  }
}

export default connect()(ArticleDetail)  