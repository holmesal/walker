import React, {Component, StyleSheet, Text, View} from 'react-native';

import Storyline from './../Storyline';
import Location from './Location';

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
        console.info(this.props.currentLocation, Storyline);
        let location = Storyline[this.props.currentLocation]();
        console.info(location);
        return (
            <Location
                location={location}
                optionPicked={this.optionPicked.bind(this)}
            />
        );
    }
}

export default connect(game$)(Game)

let styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
});