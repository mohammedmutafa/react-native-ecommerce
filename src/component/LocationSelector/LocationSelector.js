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

const districts = [
    { id: 0, name: 'Nepal (includes all districts)' },
    { id: 1, name: 'Kathmandu' },
    { id: 2, name: 'Bhaktapur' },
    { id: 3, name: 'Lalitpur' },
    { id: 4, name: 'Dhading' },
    { id: 5, name: 'Kavrepalanchok' },
    { id: 6, name: 'Nuwakot' },
    { id: 7, name: 'Rasuwa' },
    { id: 8, name: 'Sindhupalchok' },
    { id: 9, name: 'Gorkha' },
    { id: 10, name: 'Kaski' },
    { id: 11, name: 'Lamjung' },
    { id: 12, name: 'Manang' },
    { id: 13, name: 'Syangja' },
    { id: 14, name: 'Tanahu' },
    { id: 15, name: 'Bhojpur' },
    { id: 16, name: 'Dhankuta' },
    { id: 17, name: 'Morang' },
    { id: 18, name: 'Sankhuwasabha' },
    { id: 19, name: 'Sunsari' },
    { id: 20, name: 'Terhathum' },
    { id: 21, name: 'Ilam' },
    { id: 22, name: 'Jhapa' },
    { id: 23, name: 'Panchthar' },
    { id: 24, name: 'Taplejung' },
    { id: 25, name: 'Khotang' },
    { id: 26, name: 'Okhaldhunga' },
    { id: 27, name: 'Saptari' },
    { id: 28, name: 'Siraha' },
    { id: 29, name: 'Solukhumbu' },
    { id: 30, name: 'Udayapur' },
    { id: 31, name: 'Banke' },
    { id: 32, name: 'Bardiya' },
    { id: 33, name: 'Dailekh' },
    { id: 34, name: 'Jajarkot' },
    { id: 35, name: 'Surkhet' },
    { id: 36, name: 'Dhanusa' },
    { id: 37, name: 'Dholkha' },
    { id: 38, name: 'Mahottari' },
    { id: 39, name: 'Ramechhap' },
    { id: 40, name: 'Sarlahi' },
    { id: 41, name: 'Sindhuli' },
    { id: 42, name: 'Arghakhanchi' },
    { id: 43, name: 'Gulmi' },
    { id: 44, name: 'Kapilvastu' },
    { id: 45, name: 'Nawalparasi' },
    { id: 46, name: 'Palpa' },
    { id: 47, name: 'Rupandehi' },
    { id: 48, name: 'Bara' },
    { id: 49, name: 'Chitwan' },
    { id: 50, name: 'Makwanpur' },
    { id: 51, name: 'Parsa' },
    { id: 52, name: 'Rautahat' },
    { id: 53, name: 'Achham' },
    { id: 54, name: 'Bajhang' },
    { id: 55, name: 'Bajura' },
    { id: 56, name: 'Kailali' },
    { id: 57, name: 'Baglung' },
    { id: 58, name: 'Mustang' },
    { id: 59, name: 'Myagdi' },
    { id: 60, name: 'Parbat' },
    { id: 61, name: 'Dolpa' },
    { id: 62, name: 'Humla' },
    { id: 63, name: 'Jumla' },
    { id: 64, name: 'Kalikot' },
    { id: 65, name: 'Mugu' },
    { id: 66, name: 'Baitadi' },
    { id: 67, name: 'Dadeldhura' },
    { id: 68, name: 'Darchula' },
    { id: 69, name: 'Kanchanpur', },
    { id: 70, name: 'Dang' },
    { id: 71, name: 'Pyuthan' },
    { id: 72, name: 'Rolpa' },
    { id: 73, name: 'Rukum' },
    { id: 74, name: 'Salyan' }
]

