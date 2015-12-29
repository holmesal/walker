import React, {Component, StyleSheet, Text, View} from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux/native';
import {updateCurrentLocation} from '../../actions/game';
import {updatePlayer} from '../../actions/player';
import BasicLocation from '../BasicLocation';

// Selector
import {createSelector} from 'reselect';
import {location$} from '../../selectors/game';
// Uncomment this shit when you want to track cornfield state globally
//let Cornfield$ = (state) => state.getIn(['locations', 'Cornfield']);

class Cornfield extends Component {

    state = {
        text: [
            'You stand in a cornfield',
            'The sun is directly above you in a cloudless sky',
            'Blood drips from your injured leg, and the corn is almost twice your height',
            'The only sound is the wind blowing through the corn FUCKIN YOLO M8'
        ],
        options: [
            {text: 'Start walking', onPress: () => this.props.dispatch(updateCurrentLocation('CornfieldWalking'))},
            {text: 'Bandage your leg', onPress: () => this.props.dispatch(updatePlayer({bandaged: true}))}
        ]
    };

    componentDidMount() {
        setTimeout(() => this.setState({textVisible: true}), 3000);
    }

    render() {
        let options = _.slice(this.state.options);
        if (this.props.player.bandaged) options[1].visible = false;
        //console.info('is rendering!', this.props.player);
        return (
            <BasicLocation text={this.state.text} options={options} />
        )
    }
}

export default connect(location$)(Cornfield);