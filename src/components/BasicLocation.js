import React, {Component, StyleSheet, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import _ from 'lodash';
import Storyline from './../Storyline';

export default class BasicLocation extends Component {

    static propTypes = {
        text: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
        options: React.PropTypes.arrayOf(React.PropTypes.shape({
            text: React.PropTypes.string.isRequired,
            onPress: React.PropTypes.func.isRequired,
            visible: React.PropTypes.bool
        }))
    };

    getVisibility(option) {
        if (_.has(option, 'visible') && !option.visible) {
            console.info('invisible!');
            return {
                opacity: 0
            }
        }
    }

    handlePress(option) {
        if(!_.has(option, 'visible') || option.visible) option.onPress();
    }

    renderButtons() {
        let options = this.props.options.map((option, idx) => {
            return (
                <TouchableOpacity key={idx} onPress={() => this.handlePress(option)} style={[this.getVisibility(option)]}>
                    <View style={styles.button}>
                        <Text>{option.text}</Text>
                    </View>
                </TouchableOpacity>
            )
        });
        return (
            <View style={styles.buttons}>
                {options}
            </View>
        )
    }

    renderText() {
        return this.props.text.map((text) => <Text key={text} style={styles.line}>{text}</Text>)
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.wrapper}>
                <View style={styles.description}>{this.renderText()}</View>
                {this.renderButtons()}
            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    description: {
        padding: 20,
        alignSelf: 'stretch',
        //backgroundColor: 'red',
        flex: 1
    },
    line: {
        fontSize: 16
    },
    buttons: {
        //backgroundColor: 'green',
        alignSelf: 'stretch',
        padding: 20
    },
    button: {
        borderWidth: 1,
        borderColor: '#3e3e3e',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 13,
        paddingBottom: 13
    }
});