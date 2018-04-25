import React, { Component } from 'react';
import {
    View,
    Image,
    Dimensions,
    Modal
} from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Icon } from 'react-native-elements';
import { SearchBar } from '../../component/SearchBar';

import LoginWithPhoneComponent from '../../component/LoginWithPhone';
import CategoriesListComponent from '../../component/CategoriesList';
import { BackButton } from '../../component/BackButton';
import Color from '../../styles/Color';

import styles from './styles';

export default class Home extends Component {
    renderSwiper = () => {
        return (
            <View style={containerStyle}>
                <View style={sliderContainerStyle}>
                    <Swiper style={styles.wrapper} autoplay={true} activeDotColor={Color.golden}>
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
            <SearchBar />
        );
    }

    renderFloatingMenu = () => {
        const {
            changeLoginWithPhoneModalViewState,
            isLoginWithPhoneModalVisible,
            onCreateAdButtonPress,
            isUserLoggedIn
        } = this.props;

        if (isLoginWithPhoneModalVisible) {
            return <View />
        }

        return (
            <View style={floatingMenuButtonStyle}>
                <Icon
                    raised
                    name="camera"
                    type="font-awesome"
                    color={Color.lightWhite}
                    onPress={isUserLoggedIn ? onCreateAdButtonPress : changeLoginWithPhoneModalViewState}
                    containerStyle={{
                        backgroundColor: Color.dark,
                        borderWidth: 0.5,
                        borderColor: Color.golden
                    }}
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
            changeOTPVerificationUIState,
            verifyOTP,
            isOTPVerified
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
                    verifyOTP={verifyOTP}
                    isOTPVerified={isOTPVerified}
                />
            </Modal >
        );
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={mainConatinerStyle}>
                <ParallaxScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    backgroundColor={Color.lightWhite}
                    parallaxHeaderHeight={SLIDER_HEIGHT}
                    renderForeground={() => (
                        <View style={{ height: SLIDER_HEIGHT, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <BackButton
                                style={{ left: 20 }}
                                iconName="menu"
                                iconColor={Color.dark}
                                onPress={() => navigation.navigate('DrawerToggle')} />
                            {this.renderSwiper()}
                        </View>
                    )}
                >
                    {this.renserLoginWithPhoneModalView()}
                    <CategoriesListComponent
                        navigation={navigation}
                    />
                </ParallaxScrollView>
                {this.renderFloatingMenu()}
            </View >
        );
    }
}

const window = Dimensions.get('window');
const SLIDER_HEIGHT = window.width / 1.7;

const {
    mainConatinerStyle,
    containerStyle,
    floatingMenuButtonStyle,
    sliderContainerStyle
} = styles

Home.propTypes = {
    navigation: PropTypes.object,
    changeLoginWithPhoneModalViewState: PropTypes.func,
    isLoginWithPhoneModalVisible: PropTypes.bool,
    onCreateAdButtonPress: PropTypes.func,
    phoneNumberInput: PropTypes.string,
    onPhoneNumberInputChange: PropTypes.func,
    phoneNumberInputUIVisible: PropTypes.bool,
    changePhoneNumberInputUIState: PropTypes.func,
    otpVerificationUIVisible: PropTypes.bool,
    isUserLoggedIn: PropTypes.bool,
    changeOTPVerificationUIState: PropTypes.func,
    verifyOTP: PropTypes.func,
    isOTPVerified: PropTypes.bool
};
