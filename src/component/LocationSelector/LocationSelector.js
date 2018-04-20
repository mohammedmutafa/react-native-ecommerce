import React, { Component } from 'react';
import {
    Image,
    View,
    Modal,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import MultiSelect from 'react-native-multiple-select';
import { Icon } from 'react-native-elements';

import styles from './styles';
import { screenHeight, screenWidth, deviceScaledHeight } from '../../utilities/ScreenSize';
import districts from '../../utilities/districts';
import Colors from '../../styles/Color';

const {
    container,
    navigationBar,
} = styles;

export class LocationSelector extends Component {

    onPressDone = () => {
        this.props.onPressNextButton();
        this.props.changeStateOfSelectLocationModalView();
    }

    onPressBackButton = () => {
        this.props.changeStateOfSelectLocationModalView();
        this.props.onPressBackButton();
    }

    navBar = () => {
        return (
            <View style={navigationBar}>
                <Text style={{ color: '#FFFFFF', fontSize: 18 }} onPress={this.onPressBackButton}>Back</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 18 }} onPress={this.onPressDone}>Next</Text>
            </View >
        );
    }

    render() {
        const { isSelectLocationModalViewVisible, changeStateOfSelectLocationModalView, updateSelectedLocations, selectedLocation } = this.props;
        const containerHeight = container.height;
        const containerWidth = container.width;

        return (
            <Modal
                visible={isSelectLocationModalViewVisible}
                style={container} animationType="none"
                onRequestClose={changeStateOfSelectLocationModalView}
            >
                {this.navBar()}
                <View style={{ height: screenHeight, marginTop: 5 }}>
                    <MultiSelect
                        single={true}
                        hideTags={false}
                        items={districts}
                        uniqueKey="id"
                        ref={(component) => { this.multiSelect = component }}
                        onSelectedItemsChange={updateSelectedLocations}
                        selectedItems={selectedLocation}
                        selectText="Pick Location"
                        searchInputPlaceholderText="Search Locations..."
                        onChangeInput={(text) => console.log(text)}
                        // altFontFamily="ProximaNova-Light"
                        tagRemoveIconColor={Colors.dark}
                        tagBorderColor={Colors.dark}
                        tagTextColor={Colors.dark}
                        selectedItemTextColor={Colors.dark}
                        selectedItemIconColor={Colors.dark}
                        itemTextColor={Colors.dark}
                        displayKey="name"
                        searchInputStyle={{ color: Colors.dark, height: 40, padding: 5 }}
                        submitButtonColor={Colors.dark}
                        submitButtonText="Submit"
                    />
                </View>
            </Modal>
        );
    }
}

LocationSelector.propTypes = {
    isSelectLocationModalViewVisible: PropTypes.bool,
    changeStateOfSelectLocationModalView: PropTypes.func,
    selectedLocation: PropTypes.array,
    updateSelectedLocations: PropTypes.func,
    onPressBackButton: PropTypes.func
};
