import { combineReducers } from 'redux';
import * as types from './types';
import { createReducer } from '../../utils';

/* State shape
{
    list: [ product ],
}
*/

const listReducer = createReducer([])({
  [types.FETCH_LIST_COMPLETED]: (state, action) => action.payload,
});

export default combineReducers({
  list: listReducer,
});
