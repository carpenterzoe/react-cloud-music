import styled from'styled-components';
import style from '@/assets/global-style';

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background: white;
  .before {
    position: absolute;
    width: 100%;
    background: ${style["theme-color"]};
    top: -420px;
    height: 400px;
  }
  .swiper {
    position: relative;
    width: 98%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .swiper-pagination-bullet-active {
      background: ${style["theme-color"]};
    }
  }
`