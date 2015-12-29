import React, {Component} from 'react';
import {Provider} from 'react-redux/native';
import store from '../store';

import Game from '../components/Game';

export default class AppContainer extends React.Component {

    render() {
        return (
            <Provider store={store}>
                {() => <Game />}
            </Provider>
        );
    }
}

let style = {
    wrapper: {
        display: 'flex'
    }
};