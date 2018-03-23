import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    Platform,
    Modal,
    Text
} from 'react-native';
import Swiper from 'react-native-swiper';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { SearchBar, Icon } from 'react-native-elements';

import LoginWithPhoneComponent from '../component/LoginWithPhone';
import MenuComponent from '../component/Menu';
import CategoriesListComponent from '../component/CategoriesList';
import { BackButton } from '../component/BackButton';
import Color from '../styles/Color';

export default class Home extends Component {
    renderSwiper = () => {
        const { sliderContainerStyle, containerStyle } = styles;

        return (
            <View style={containerStyle}>
                <View style={sliderContainerStyle}>
                    <Swiper style={styles.wrapper} autoplay={true}>
                        <Image
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/travelBanner.png?alt=media&token=9cb6ab5e-229e-4308-b7a0-5835936e1635' }}
                            style={styles.slide1}
                        />
                        <Image
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/fashion.jpg?alt=media&token=3426181c-22fa-43f1-aac3-177b20676bb5' }}
                            style={styles.slide1}
                        />
                        <Image
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/photographyBanner.png?alt=media&token=d86028a6-fbaa-4398-960b-20a4b1afa952' }}
                            style={styles.slide1}
                        />
                        <Image
                            //Flag URL: https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/nepal.png?alt=media&token=aa5bcfc5-8a6a-4b69-92c8-2d208b2fc2b9
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/basketBanner.png?alt=media&token=adeb788e-66df-448f-959d-db20b07f423c' }}
                            style={styles.slide1}
                        />
                    </Swiper>
                </View>
                {this.renderSearchBar()}
            </View >
        );
    }

    renderSearchBar = () => {
        return (
            <SearchBar
                containerStyle={styles.searchbarContainerStyle}
                inputStyle={styles.searchBarStyle}
                lightTheme={true}
                round={true}
                noIcon={true}
                onChangeText={null}
                onClearText={null}
                placeholderTextColor="#C7C7CD"
                clearIcon
                placeholder="Search for the Product..."
            />
        );
    }

    renderAllCategoriesButton = () => {
        return (
            <View style={styles.allCategoriesButtonStyle}>
                <Text>__________</Text>
                <Text>All Categories</Text>
                <Text>__________</Text>
            </View>
        );
    }

    renderFloatingMenu = () => {
        const { changeLoginWithPhoneModalViewState, isLoginWithPhoneModalVisible } = this.props;

        if (isLoginWithPhoneModalVisible) {
            return <View />
        }

        return (
            <View style={styles.floatingMenuButtonStyle}>
                <Icon
                    raised
                    name="align-center"
                    type="feather"
                    color="#2a2a2a"
                    onPress={changeLoginWithPhoneModalViewState}
                />
            </View>
        );
    }

    renserLoginWithPhoneModalView = () => {
        const {
            isLoginWithPhoneModalVisible,
            changeLoginWithPhoneModalViewState,
            phoneNumberInput,
            onPhoneNumberInputChange,
            phoneNumberInputUIVisible,
            changePhoneNumberInputUIState,
            otpVerificationUIVisible,
            changeOTPVerificationUIState
        } = this.props;

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={isLoginWithPhoneModalVisible}
                onRequestClose={changeLoginWithPhoneModalViewState}
            >
                <LoginWithPhoneComponent
                    changeLoginWithPhoneModalViewState={changeLoginWithPhoneModalViewState}
                    phoneNumberInput={phoneNumberInput}
                    phoneNumberInputUIVisible={phoneNumberInputUIVisible}
                    onPhoneNumberInputChange={onPhoneNumberInputChange}
                    changePhoneNumberInputUIState={changePhoneNumberInputUIState}
                    otpVerificationUIVisible={otpVerificationUIVisible}
                    changeOTPVerificationUIState={changeOTPVerificationUIState}
                />
            </Modal >
        );
    }

    render() {
        const { mainConatinerStyle, stickySection } = styles;

        return (
            <View style={mainConatinerStyle}>
                <ParallaxScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    backgroundColor="#FFFFFF"
                    // stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={SLIDER_HEIGHT}
                    renderForeground={() => (
                        <View style={{ height: SLIDER_HEIGHT, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <BackButton
                                style={{ left: 20 }}
                                iconName='menu'
                                iconColor={Color.dark}
                                onPress={() => this.props.navigation.navigate('DrawerToggle')} />
                            {this.renderSwiper()}
                        </View>
                    )}
                >
                    {this.renderAllCategoriesButton()}
                    {this.renserLoginWithPhoneModalView()}
                    <CategoriesListComponent navigation={this.props.navigation} />
                </ParallaxScrollView>
                {this.renderFloatingMenu()}
            </View >
        );
    }
}

const window = Dimensions.get('window');

const STICKY_HEADER_HEIGHT = (110 / 768) * window.height;
const SLIDER_HEIGHT = window.width / 1.7;

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    containerStyle: {
        alignSelf: 'center',
        width: window.width,
        overflow: 'hidden', // for hide the not important parts from circle
        height: SLIDER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'

    },
    sliderContainerStyle: {
        borderRadius: window.width, // border borderRadius same as width and height
        width: window.width * 2,
        height: window.width * 2,
        marginLeft: -(window.width / 2),// reposition the circle inside parent view
        position: 'absolute',
        bottom: 0, // show the bottom part of circle
        overflow: 'hidden' // hide not important part of image

    },
    wrapper: {
    },
    slide1: {
        height: SLIDER_HEIGHT,// same width and height for the container
        width: window.width,
        position: 'absolute', // position it in circle
        bottom: 0, // position it in circle
        marginLeft: window.width / 2, // center it in main view same value as marginLeft for circle but positive
        backgroundColor: '#FFFFFF'
    },
    searchbarContainerStyle: {
        width: window.width - 65,
        height: (60 / 768) * window.height,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 3, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 5,
            },
            android: {
                elevation: 2,
            }
        })
    },
    searchBarStyle: {
        backgroundColor: 'transparent',
        width: window.width - 75
    },
    floatingMenuButtonStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35,
        paddingRight: 15
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        width: window.width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    allCategoriesButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    }
});
