import React, {Component, StyleSheet, Text, View} from 'react-native';

import Storyline from './../Storyline';
import Location from './Location';
import Cornfield from './locations/Cornfield';

import {game$} from '../selectors/game';
import {connect} from 'react-redux/native';

//@connect(game$)
class Game extends Component {

    static propTypes = {};

    static defaultProps = {};

    state = {
        player: {}
    };

    optionPicked(option) {
        console.info('option picked!', option);
    }

    render() {
        return (
            <Cornfield />
        );
    }
}

export default connect(game$)(Game)

let styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
});