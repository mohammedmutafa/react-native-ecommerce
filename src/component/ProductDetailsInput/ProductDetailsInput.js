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
    navigationBar,
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
        return (
            <Icon
                raised
                name='done'
                type='material-icon'
                color='#FFFFFF'
                containerStyle={doneButtonStyle}
                size={25}
                onPress={null}
            />
        );
    }

    get navigationBar() {
        return (
            <View style={navigationBar}>
                <View />
                <Icon
                    name='close'
                    type='evilIcons'
                    color='#FFFFFF'
                    underlayColor='#FFFFFF'
                    onPress={null}
                />
            </View>
        );
    }

    get renderHorizontalBorder() {
        return <View style={{ height: 0.5, backgroundColor: '#D3D3D3' }} />
    }

    render() {
        const { isVisible } = this.props;
        const { text } = this.state;

        return (
            <Modal visible={isVisible}>
                {this.navigationBar}
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
    isVisible: PropTypes.bool
};
