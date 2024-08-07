import React from 'react';
import styled, { keyframes } from'styled-components';
import style from '@/assets/global-style';
import { PropTypes } from 'prop-types';

const loading = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`
const LoadingWrapper = styled.div`
  >div {
    position: fixed;
    z-index: 1000;
    left: 0; 
    right: 0;  
    top: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    opacity: 0.6;
    border-radius: 50%;
    background-color: ${style ["theme-color"]};
    animation: ${loading} 1.4s infinite ease-in;
  }
  .second {
    animation-delay: -0.7s;
  }
`

function Loading (props)  {
  const { show } = props;
  return (
    <LoadingWrapper  style={show ? {display: "block"}: {display: "none"}}>
      <div></div>
      <div className='second'></div>
    </LoadingWrapper>
  );
}

Loading.defaultProps = {
  show: true
};

Loading.propTypes = {
  show: PropTypes.bool
};

export default React.memo (Loading);
