import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style';

import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// 相关配置版本更新 参考https://blog.csdn.net/zrc_xiaoguo/article/details/135884713
function Slider (props) {
  const [sliderSwiper, setSliderSwiper] = useState (null);
  const { bannerList } = props;

  useEffect (() => {
    if (bannerList.length && !sliderSwiper){
        let newSliderSwiper = new Swiper(".swiper", {
          loop: true,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
          modules: [Autoplay],
        });
        setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);
  
  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="swiper">
        <div className="swiper-wrapper">
          {
            bannerList.map (slider => {
              return (
                <div className="swiper-slide" key={slider.key}>
                  <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                </div>
              );
            })
          }
        </div>
      </div> 
    </SliderContainer>
  );
}

export default React.memo (Slider);