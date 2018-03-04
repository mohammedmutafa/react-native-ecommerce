import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

import styles from './styles';
import { screenHeight, screenWidth, deviceScaledHeight } from '../../utilities/ScreenSize';

const {
    container
} = styles;

export class ConditionSelector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItems: []
        }
    };

    render() {

        return (
            <View style={container}>
                <CheckBox
                    title='New'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                // checked={this.state.checked}
                />
                <CheckBox
                    title='Used'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                // checked={this.state.checked}
                />
            </View>
        );
    }
}

ConditionSelector.propTypes = {

};

