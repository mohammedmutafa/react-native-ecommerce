import React from 'react';
import {
    View,
    Modal,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Color from '../../styles/Color';

const {
    container,
    textInputStyle,
    titleTextStyle,
    hintTextStyle,
    doneButtonStyle,
    doneTextStyle,
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

    onTextChange = (text) => {
        this.setState({
            text
        });
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
                    <TouchableOpacity
                        onPress={() => setProductDescription(text)}
                        style={doneButtonStyle}
                    >
                        <Text style={doneTextStyle}>Done</Text>
                    </TouchableOpacity>
                    <Text style={titleTextStyle}>Product Description</Text>
                    {this.renderSeparator()}
                    <Text style={hintTextStyle}>User would like to know more about the product. Please provide the detail description.</Text>
                    <TextInput
                        style={textInputStyle}
                        placeholder="Product Description"
                        placeholderTextColor={Color.placeholderWhite}
                        multiline={true}
                        maxLength={200}
                        autoFocus={true}
                        onChangeText={this.onTextChange}
                        value={text}
                    />
                </View>
            </Modal>
        );
    }
}

ProductDetailsInput.propTypes = {
    isProductDescriptionModalViewVisible: PropTypes.bool,
    setProductDescription: PropTypes.func
};
