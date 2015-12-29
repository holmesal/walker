import {createReducer} from 'redux-immutablejs';
import Immutable from 'immutable';
import {UPDATE_PLAYER} from '../actions/player';

const initialState = Immutable.fromJS({
    bandaged: false
});

export default createReducer(initialState, {

    [UPDATE_PLAYER]: (state, action) => state.merge(action.props),

});