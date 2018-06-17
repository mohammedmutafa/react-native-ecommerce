import React, { Component } from 'react';
import {
    View,
    Text,
    Modal
} from 'react-native';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

import styles from './styles';
import Color from '../../styles/Color';

const {
    container
} = styles;

export class ConditionSelector extends Component {

    render() {
        const { selectedItem, setProductConditionUsed, setProductConditionNew } = this.props;
        return (
            <Modal
                style={{ flexDirection: 'column' }}
                visible={true}
                animationType="slide"
                transparent={true}
            >
                <View style={{ flex: 1.5, backgroundColor: Color.semiTransparentDarkOverlay }} />
                <View style={container}>
                    <Text>Select the condition of the product.</Text>
                    <CheckBox
                        containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                        title='New Product'
                        checkedColor={Color.dark}
                        iconType="ionicon"
                        checkedIcon="ios-checkmark-circle"
                        textStyle={{ color: Color.dark }}
                        uncheckedIcon='ios-checkmark-circle-outline'
                        checked={selectedItem === 'New' ? true : false}
                        onPress={setProductConditionNew}
                        size={35}
                    />
                    <CheckBox
                        containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                        title='Used Product'
                        checkedColor={Color.dark}
                        textStyle={{ color: Color.dark }}
                        iconType="ionicon"
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='ios-checkmark-circle-outline'
                        checked={selectedItem === 'Used' ? true : false}
                        onPress={setProductConditionUsed}
                        size={35}
                    />
                </View>
            </Modal>

        );
    }
}

ConditionSelector.propTypes = {
    selectedItem: PropTypes.string,
    setProductConditionUsed: PropTypes.func,
    setProductConditionNew: PropTypes.func
};
