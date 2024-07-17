import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '@/application/Recommend/store/index';
import { reducer as singersReducer } from '@/application/Singers/store/index';

// 将 recommend 的 reducer 注册到全局 store
export default combineReducers ({
  recommend: recommendReducer,
  singers: singersReducer,
});