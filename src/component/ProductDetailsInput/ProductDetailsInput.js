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
import Color from '../../styles/Color';

const {
    container,
    textInputStyle,
    titleTextStyle,
    hintTextStyle,
    doneButtonStyle,
    separatorStyle
} = styles;

export class ProductDetailsInput extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    renderSeparator = () => {
        return <View style={separatorStyle} />
    }

    get renderHorizontalBorder() {
        return <View style={{ height: 0.5, backgroundColor: '#D3D3D3' }} />
    }

    render() {
        const { isProductDescriptionModalViewVisible, setProductDescription } = this.props;
        const { text } = this.state;

        return (
            <Modal
                visible={isProductDescriptionModalViewVisible}
                animationType="slide"
                onRequestClose={() => null}
            >
                <View style={container}>
                    <Text
                        style={doneButtonStyle}
                        onPress={() => setProductDescription(text)}
                    >
                        Done
                    </Text>
                    <Text style={titleTextStyle}>Product Description</Text>
                    {this.renderSeparator()}
                    <Text style={hintTextStyle}>User would like to know more about the product. Please provide the detail description.</Text>
                    <TextInput
                        style={textInputStyle}
                        placeholder="Product Description"
                        placeholderTextColor={Color.placeholderWhite}
                        multiline={true}
                        maxLength={200}
                        onChangeText={(text) => this.setState({ text })}
                        value={text}
                    />
                    {this.renderHorizontalBorder}
                </View>
            </Modal>
        );
    }
}

ProductDetailsInput.propTypes = {
    isProductDescriptionModalViewVisible: PropTypes.bool,
    setProductDescription: PropTypes.func
};
