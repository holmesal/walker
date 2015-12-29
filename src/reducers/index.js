import {combineReducers} from 'redux-immutablejs';
import game from './game';
import player from './player';

export default combineReducers({
    game,
    player
});