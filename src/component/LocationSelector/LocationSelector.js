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

const {
    container,
    navigationBar,
} = styles;

export class LocationSelector extends Component {

    get navBar() {
        return (
            <TouchableOpacity style={navigationBar} onPress={this.props.changeStateOfSelectLocationModalView}>
                <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Done</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const { isSelectLocationModalViewVisible, updateSelectedLocations, selectedLocation } = this.props;
        const containerHeight = container.height;
        const containerWidth = container.width;

        return (
            <Modal visible={isSelectLocationModalViewVisible} style={container} animationType="slide">
                {this.navBar}
                <View style={{ height: screenHeight / 2, marginTop: 5 }}>
                    <MultiSelect
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
                        tagRemoveIconColor="#2a2a2a"
                        tagBorderColor="#2a2a2a"
                        tagTextColor="#2a2a2a"
                        selectedItemTextColor="#2a2a2a"
                        selectedItemIconColor="#2a2a2a"
                        itemTextColor="#2a2a2a"
                        displayKey="name"
                        searchInputStyle={{ color: '#2a2a2a', height: 40, padding: 5 }}
                        submitButtonColor="#2a2a2a"
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
    updateSelectedLocations: PropTypes.func
};
