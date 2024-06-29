import React from 'react';
import Slider from '@/components/slider';
import RecommendList from '@/components/list';
import { Content } from './style'
import Scroll from '@/baseUI/scroll';

function Recommend () {

  //mock 数据
  const bannerList = [1,2,3,4].map (item => {
    return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg", key: item }
  });
  const recommendList = [1,2,3,4,5,6,7,8,9,10].map (item => {
    return {
      id: 1,
      picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: 17171122,
      name: "朴树、许巍、李健、郑钧、老狼、赵雷"
    }
  });

  return (
    // Content 容器 固定高度
    // better-scroll 原理，容器元素高度固定，当子元素高度超过容器元素高度时，通过 transfrom 动画产生滑动效果
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
    </Content> 
  )
}

export default React.memo (Recommend);