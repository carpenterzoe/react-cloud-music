import React, { useEffect } from 'react';
import { forceCheck } from 'react-lazyload';

import Scroll from '@/baseUI/scroll';
import Loading from '@/baseUI/loading/index';

import Slider from '@/components/slider';
import RecommendList from '@/components/list';
import { Content } from './style'

import { connect } from "react-redux";
import * as actionTypes from './store/actionCreators';

function Recommend (props){
  const { bannerList, recommendList, enterLoading } = props;
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

  useEffect (() => {
    // 如果页面有数据，则不发请求
    //immutable 数据结构中长度属性 size
    if (!bannerList.size){
      getBannerDataDispatch ();
    }
    if (!recommendList.size){
      getRecommendListDataDispatch ();
    }
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS () : [];
  const recommendListJS = recommendList ? recommendList.toJS () :[];

  return (
    // Content 容器 固定高度
    // better-scroll 原理，容器元素高度固定，当子元素高度超过容器元素高度时，通过 transfrom 动画产生滑动效果
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
      { enterLoading ? <Loading></Loading> : null }
    </Content> 
  )
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  bannerList: state.getIn (['recommend', 'bannerList']),
  recommendList: state.getIn (['recommend', 'recommendList']),
  enterLoading: state.getIn (['recommend', 'enterLoading']),
})

// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch () {
      dispatch (actionTypes.getBannerList ());
    },
    getRecommendListDataDispatch () {
      dispatch (actionTypes.getRecommendList ());
    },
  }
}

// 将 ui 组件包装成容器组件
export default connect (mapStateToProps, mapDispatchToProps)(React.memo (Recommend));