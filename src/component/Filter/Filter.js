import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import styles from './styles';
import Color from '../../styles/Color';

const {
    container,
    locationFilterContainer,
    selectLocationButtonStyle,
    priceFilterButtonStyle,
    navigationBarStyle
} = styles;

//Location, sub-categort, price range

export class Filter extends Component {

    renderNavigationBar = () => {
        return (
            <View style={navigationBarStyle}>
                <Icon
                    containerStyle={{ padding: 10 }}
                    name="ios-arrow-dropleft-outline"
                    type="ionicon"
                    size={35}
                    color={Color.golden}
                //onPress={changeLoginWithPhoneModalViewState}
                />
                <Icon
                    containerStyle={{ padding: 10 }}
                    name="ios-checkmark-circle-outline"
                    type="ionicon"
                    size={35}
                    color={Color.golden}
                //onPress={changeLoginWithPhoneModalViewState}
                />
            </View>
        );
    }


    renderLocationFilter = () => {
        const { selectedLocation } = this.props;

        return (
            <View style={locationFilterContainer}>
                <Text style={{ color: Color.dark, fontSize: 16 }}>Discover ads near you</Text>
                <TouchableOpacity
                    style={selectLocationButtonStyle}
                //onPress={changeStateOfSelectLocationModalView}
                >
                    <Text style={{ color: Color.lightDark, fontSize: 16 }}>Select Location</Text>
                    <Icon
                        name="menu-up"
                        type="material-community"
                        color={Color.lightDark}
                    //onPress={changeLoginWithPhoneModalViewState}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    renderPriceFilter = () => {
        const { selectedLocation } = this.props;

        return (
            <View style={locationFilterContainer}>
                <Text style={{ color: Color.dark, fontSize: 16 }}>Set a price range</Text>
                <View
                    style={priceFilterButtonStyle}
                //onPress={changeStateOfSelectLocationModalView}
                >
                    <TextInput
                        style={{ color: Color.dark, fontSize: 16 }}
                        placeholderTextColor={Color.lightDark}
                        keyboardType="numeric"
                        placeholder="₹ (Min Price)"
                        autoFocus={false}
                        clearButtonMode="always"
                        multiline={false}
                        maxLength={13}
                        //onChangeText={(text) => onProductPriceInput(text.replace(/[^0-9]/g, ''))}
                        value={''}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View
                    style={priceFilterButtonStyle}
                //onPress={changeStateOfSelectLocationModalView}
                >
                    <TextInput
                        style={{ color: Color.dark, fontSize: 16 }}
                        placeholderTextColor={Color.lightDark}
                        keyboardType="numeric"
                        placeholder="₹ (Max Price)"
                        autoFocus={false}
                        clearButtonMode="always"
                        multiline={false}
                        maxLength={13}
                        //onChangeText={(text) => onProductPriceInput(text.replace(/[^0-9]/g, ''))}
                        value={''}
                        underlineColorAndroid="transparent"
                    />
                </View>

            </View>
        );
    }

    renderCategoryFilter = () => {
        const { selectedLocation } = this.props;

        return (
            <View style={locationFilterContainer}>
                <Text style={{ color: Color.dark, fontSize: 16 }}>Choose Category</Text>
                <TouchableOpacity
                    style={selectLocationButtonStyle}
                //onPress={changeStateOfSelectLocationModalView}
                >
                    <Text style={{ color: Color.lightDark, fontSize: 16 }}>All Categories</Text>
                    <Icon
                        name="menu-up"
                        type="material-community"
                        color={Color.lightDark}
                    //onPress={changeLoginWithPhoneModalViewState}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const {
            selectedProductCondition,
            setProductConditionUsed,
            setProductConditionNew,
            isFilterModalViewVisible
        } = this.props;

        return (
            <Modal
                style={container}
                visible={true}
                animationType="slide"
            // transparent={true}
            >
                <View style={container}>
                    {this.renderNavigationBar()}
                    {this.renderLocationFilter()}
                    {this.renderPriceFilter()}
                    {this.renderCategoryFilter()}
                </View>
            </Modal >
        );
    }
}

Filter.propTypes = {
    selectedProductCondition: PropTypes.string,
    setProductConditionUsed: PropTypes.func,
    setProductConditionNew: PropTypes.func,
    isProductConditionModalViewVisible: PropTypes.bool
};
