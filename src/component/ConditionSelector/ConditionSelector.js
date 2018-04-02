import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

import styles from './styles';
import Color from '../../styles/Color';

const { container } = styles;

export class ConditionSelector extends Component {

    render() {
        const { selectedItem, setProductConditionUsed, setProductConditionNew } = this.props;

        return (
            <View style={container}>
                <CheckBox
                    containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                    title='New'
                    checkedColor={Color.lightWhite}
                    checkedIcon='dot-circle-o'
                    textStyle={{ color: Color.lightWhite }}
                    uncheckedIcon='circle-o'
                    checked={selectedItem === 'New' ? true : false}
                    onPress={setProductConditionNew}
                    size={35}
                />
                <CheckBox
                    containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                    title='Used'
                    checkedColor={Color.lightWhite}
                    textStyle={{ color: Color.lightWhite }}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={selectedItem === 'Used' ? true : false}
                    onPress={setProductConditionUsed}
                    size={35}
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
