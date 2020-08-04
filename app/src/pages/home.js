import React from 'react';
import { Component } from "react"
import { connect } from "dva"

import Header from '@/components/common/Header';
import ArticleItem from '../components/common/ArticleItem';

function Article(props) {
  let fakeData = [{
    title: '如何成为一个合格的大前端',
    time: '2020.8.2'
  },{
    title: '如何成为一个合格的大前端',
    time: '2020.8.2'
  },{
    title: '如何成为一个合格的大前端',
    time: '2020.8.2'
  },{
    title: 'umi + koa + mongodb实现一个博客',
    time: '2020.8.2'
  }]

  return (
    <div className='article minwidth960'>
      {
        fakeData.map((val,i) => {
          return (<ArticleItem key={i} title={val.title} time={val.time}></ArticleItem>)
        })
      }
      <div className="more-article">
          readmore→
        </div>
    </div>
  );
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeTitle: {
        title: "Chisfee's Blog",
        secTitle: 'Just Do It',
        pic: require('@/assets/home-bg.jpg')
      }
    }
  }

  componentDidMount() {
      // console.log(this.props)
  }
  render() {
    let  { title, secTitle, pic } = this.state.homeTitle
    return (
      <div className="home-main">
        <Header route={'home'} title={title} secTitle={secTitle} pic={pic}/>
        <Article />
      </div>
    )
  }
}

export default connect()(Home)  
