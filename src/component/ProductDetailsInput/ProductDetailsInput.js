import React from 'react';
import {
    View,
    Modal,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import styles from './styles';

const {
    container,
    textInputStyle,
    titleTextStyle,
    doneButtonStyle
} = styles;

export class ProductDetailsInput extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    get doneButton() {
        const { changeStateOfproductDescriptionModalView } = this.props;
        return (
            <Icon
                raised
                name='done'
                type='material-icon'
                color="#DAA520"
                containerStyle={doneButtonStyle}
                size={25}
                onPress={changeStateOfproductDescriptionModalView}
            />
        );
    }

    get renderHorizontalBorder() {
        return <View style={{ height: 0.5, backgroundColor: '#D3D3D3' }} />
    }

    render() {
        const { isVisible } = this.props;
        const { text } = this.state;

        return (
            <Modal visible={isVisible} animationType="slide">
                <View style={container}>
                    <Text style={titleTextStyle}>Product Description</Text>
                    <TextInput
                        style={textInputStyle}
                        placeholder='Product Description'
                        multiline={true}
                        maxLength={200}
                        onChangeText={(text) => this.setState({ text })}
                        value={text}
                    />
                    {this.renderHorizontalBorder}
                    {this.doneButton}
                </View>
            </Modal>
        );
    }
}

ProductDetailsInput.propTypes = {
    isVisible: PropTypes.bool,
    changeStateOfproductDescriptionModalView: PropTypes.func
};
