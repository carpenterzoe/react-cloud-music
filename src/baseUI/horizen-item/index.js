import React, { useState, useRef, useEffect, memo } from 'react';

import Scroll from '@/baseUI/scroll';
import { PropTypes } from 'prop-types';
import { List, ListItem } from './style'

function Horizen (props) {
  const { list, oldVal, title } = props;
  const { handleClick } = props;

  const Category = useRef (null);

  // better-scroll 的 (横向) 滚动原理， 1. 外面容器要宽度固定，2. 内容宽度要大于容器宽度。

  // 初始化 计算内容宽度
  useEffect (() => {
    let categoryDOM = Category.current;
    let tagElems = categoryDOM.querySelectorAll ("span");
    let totalWidth = 0;
    Array.from (tagElems).forEach (ele => {
      totalWidth += ele.offsetWidth;  // offsetWidth 元素宽度，包括 border 和 padding
    });
    categoryDOM.style.width = `${totalWidth}px`;
  }, []);


  return ( 
    <Scroll direction={"horizental"}>
      <div ref={Category}>
        <List>
          <span>{title}</span>
          {
            list.map ((item) => {
              return (
                <ListItem 
                  key={item.key}
                  className={`${oldVal === item.key ? 'selected': ''}`} 
                  onClick={() => handleClick (item.key)}>
                    {item.name}
                </ListItem>
              )
            })
          }
        </List>
      </div>
    </Scroll>
  );
}

// 首先考虑接受的参数
//list 为接受的列表数据
//oldVal 为当前的 item 值
//title 为列表左边的标题
//handleClick 为点击不同的 item 执行的方法
Horizen.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null
};

Horizen.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func
};
export default memo (Horizen);
