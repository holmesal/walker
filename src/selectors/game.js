import {createSelector} from 'reselect';

export const currentLocation$ = (state) => state.getIn(['game', 'currentLocation']);
export const player$ = (state) => state.getIn(['player']);

export const game$ = createSelector(currentLocation$, player$, (currentLocation, player) => {
    return {
        currentLocation,
        player: player.toJS()
    }
});

export const location$ = createSelector(player$, (player) => ({
    player: player.toJS()
}));