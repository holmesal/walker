import {createReducer} from 'redux-immutablejs';
import Immutable from 'immutable';
import {UPDATE_CURRENT_LOCATION} from '../actions/game';

const initialState = Immutable.fromJS({
    currentLocation: 'Cornfield'
});

export default createReducer(initialState, {

    [UPDATE_CURRENT_LOCATION]: (state, action) => state.set('currentLocation', action.currentLocation),

});