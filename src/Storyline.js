import store from './store';
import {updateCurrentLocation} from './actions/game';
import {updatePlayer} from './actions/player';

const getPlayerProperty = (key) => {
    return store.getState().getIn(['player', key]);
};

export default storyline = {

    Cornfield: () => {
        let text = [
            'You stand in a cornfield',
            'The sun is directly above you in a cloudless sky',
            'Blood drips from your injured leg, and the corn is almost twice your height',
            'The only sound is the wind blowing through the corn'
        ];
        //if (bandageLeg) text.push('You tear a strip from your shirt.');
        return {
            text,
            options: [
                {
                    text: 'Start walking',
                    action: () => {
                        store.dispatch(updateCurrentLocation('CornfieldWalking'))
                    }
                },
                {
                    text: 'Bandage your leg',
                    action: () => {
                        store.dispatch(updatePlayer({isBandaged: true}))
                    },
                    visible: !getPlayerProperty('isBandaged')
                }
            ]
        }
    },

    CornfieldWalking: () => {
        let text = [
            'You\'ve been walking for what feels like hours',
            'The sun is bright, and the air is chilly',
            'Your arms are covered with scratches from the sharp leaves',
            'The corn is still too high to see over'
        ];
        let options = [
            {
                text: 'Keep walking west',
                action: () => {
                    if (getPlayerProperty('isBandaged') && !getPlayerProperty('bandagedLate')) {
                        store.dispatch(updateCurrentLocation('CornfieldWest'));
                    } else {
                        store.dispatch(updateCurrentLocation('CornfieldSubWest'));
                    }
                }
            }
        ];
        if (getPlayerProperty('isBandaged')) {
            text.push('The bandage is not ideal, but it has slowed the bleeding');
            text.push('You hope to find medical supplies soon');
            // Add option to adjust bandage
            options.push({
                text: 'Adjust bandage',
                action: () => updatePlayer({adjustedBandage: true}),
                visible: !getPlayerProperty('adjustedBandage')
            });
        } else {
            text.push('You\'ve lost alot of blood');
            text.push('You feel weak and sad');
            text.push('You don\'t want to die');
        }
        text = text.concat([
            'You look to the heavens for help',
            'The sun has moved',
            'This is good',
            'You brilliantly deduce that you are walking West'
        ]);
        // TODO - if adjusted bandage

        // TODO - if bandaged late
        return {
            text,
            options
        }
    },

    CornfieldWest: () => {
        return {
            text: ['cornfieldWest'],
            options: []
        }
    },

    CornfieldSubWest: () => {
        return {
            text: ['cornfieldSubWest'],
            options: []
        }
    },
};