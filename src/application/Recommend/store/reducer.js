import * as actionTypes from './constants';
import { fromJS } from 'immutable'; // fromJS 把 JS 数据结构转化成 immutable 数据结构

// 初始化state
const defaultState = fromJS ({
  bannerList: [],
  recommendList: [],
  enterLoading: true, // loading 和数据之间是联动关系，因此 loading 的状态也放在 redux 管理
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set ('bannerList', action.data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set ('recommendList', action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set ('enterLoading', action.data);
    default:
      return state;
  }
}
