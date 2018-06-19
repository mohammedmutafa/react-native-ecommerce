import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Modal,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { CheckBox, SearchBar } from 'react-native-elements';

import styles from './styles';
import Color from '../../styles/Color';
import { screenHeight } from '../../utilities/ScreenSize';
import districts from '../../utilities/districts';

const {
    container
} = styles;

export class LocationSelector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fullListData: districts,
            filteredList: districts
        }
    }

    _keyExtractor = (item, index) => String(item.id);

    _renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => this.props.updateSelectedLocations(item.name)}
            style={{ flexDirection: 'column', justifyContent: 'space-around' }}
        >
            <CheckBox
                containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
                title={item.name}
                checkedColor={Color.dark}
                iconType="ionicon"
                checkedIcon="ios-checkmark-circle"
                textStyle={{ color: Color.dark }}
                uncheckedIcon="ios-checkmark-circle-outline"
                checked={this.props.selectedLocation === item.name ? true : false}
                onPress={() => null}
                size={35}
            />
        </TouchableOpacity>
    );

    renderSeparator = () => {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                height: StyleSheet.hairlineWidth,
                backgroundColor: Color.placeholderWhite,
                marginVertical: 5
            }}
            />
        );
    }

    renderHeader = () => {
        return (
            <SearchBar
                lightTheme={true}
                containerStyle={{ backgroundColor: Color.lightBlueWhite }}
                clearIcon={{ color: Color.dark }}
                searchIcon={true} // You could have passed `null` too
                onChangeText={this.searchText}
                onClear={() => null}
                placeholder="Search..."
            />
        );
    }

    searchText = (e) => {
        let text = e.toLowerCase()
        let fullList = this.state.fullListData;
        let filteredList = fullList.filter((item) => {
            if (item.name.toLowerCase().match(text))
                return item;
        })
        if (!text || text === '') {
            this.setState({
                filteredList: fullList
            })
        } else if (!filteredList.length) {
            this.setState({
                filteredList: []
            })
        }
        else if (Array.isArray(filteredList)) {
            this.setState({
                filteredList
            })
        }
    }

    render() {
        const {
            isSelectLocationModalViewVisible,
            changeStateOfSelectLocationModalView,
            updateSelectedLocations,
            selectedLocation
        } = this.props;

        console.log(selectedLocation);

        return (
            <Modal
                visible={true}
                transparent={true}
                style={container}
                animationType="slide"
                onRequestClose={changeStateOfSelectLocationModalView}
            >
                <View style={{ height: screenHeight, padding: 35, backgroundColor: Color.semiTransparentDarkOverlay }}>
                    {this.renderHeader()}
                    <FlatList
                        contentContainerStyle={{ backgroundColor: Color.lightBlueWhite }}
                        data={this.state.filteredList}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        ItemSeparatorComponent={this.renderSeparator}
                        enableEmptySections={true}
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
