import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

import styles from './styles';

const { container } = styles;

export class ConditionSelector extends Component {

    render() {
        const { selectedItem, setProductConditionUsed, setProductConditionNew } = this.props;

        return (
            <View style={container}>
                <CheckBox
                    title='New'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={selectedItem === 'New' ? true : false}
                    onPress={setProductConditionNew}
                />
                <CheckBox
                    title='Used'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={selectedItem === 'Used' ? true : false}
                    onPress={setProductConditionUsed}
                />
            </View>
        );
    }
}

ConditionSelector.propTypes = {
    selectedItem: PropTypes.string,
    setProductConditionUsed: PropTypes.func,
    setProductConditionNew: PropTypes.func
};
