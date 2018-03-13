import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    Platform,
    FlatList,
    TextInput,
    TouchableOpacity,
    Text,
    Modal
} from 'react-native';
import { Icon, FormLabel, FormInput, CheckBox } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import * as Animatable from 'react-native-animatable';

import Categories from '../styles/Categories';
import districts from '../utilities/districts';
import Colors from '../styles/Color';

import { LocationSelector } from './LocationSelector';
import { CategorySelector } from './CategorySelector';
import { ConditionSelector } from './ConditionSelector';
import { ProductDetailsInput } from './ProductDetailsInput';
import { CreateAdCoverPhoto } from './CreateAdCoverPhoto';

const { categoryList } = Categories;

class CreateAd extends Component {

    renderImageView = () => {
        const { containerStyle, semiTransparentViewStyle } = styles;

        return (
            <View style={containerStyle}>
                <Image
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/fashion.jpg?alt=media&token=3426181c-22fa-43f1-aac3-177b20676bb5' }}
                    style={styles.slide1}
                />
                <View style={semiTransparentViewStyle} />
                <View style={styles.textContainerStyle}>
                    <Animatable.Text style={styles.titleTextStyle} animation="fadeInLeft" delay={200}></Animatable.Text>
                    <Animatable.Text style={styles.titleTextStyle} animation="fadeInLeft" delay={200}>Things buyers want to know</Animatable.Text>
                    <Animatable.Text style={styles.dateTextStyle} animation="fadeInLeft" delay={200}>Cover Photo</Animatable.Text>
                </View>
            </View >
        );
    }

    renderHorizontalBorder = () => {
        return <View style={{ height: 0.5, backgroundColor: '#D3D3D3' }} />
    }

    renderHeaderText = (text) => <Text style={styles.headerTextStyle}>{text}</Text>;

    renderProductTitleInput = () => {
        const { textInputContainerStyle, headerTextStyle, textInputStyle } = styles;

        return (
            <View style={textInputContainerStyle} >
                {this.renderHeaderText('Title')}
                <TextInput
                    style={textInputStyle}
                    // onChangeText={(text) => this.setState({ text })}
                    placeholder="Product Title"
                    clearButtonMode='always'
                    multiline={false}
                    maxLength={50}
                // value={this.state.text}
                />
                {this.renderHorizontalBorder()}
            </View>
        );
    }

    renderProductPrice = () => {
        const { textInputContainerStyle, textInputStyle } = styles;
        const { productPrice, onProductPriceInput } = this.props;

        return (
            <View style={textInputContainerStyle} >
                {this.renderHeaderText('Price (₹)')}
                <TextInput
                    style={textInputStyle}
                    keyboardType='numeric'
                    placeholder='₹'
                    clearButtonMode='always'
                    multiline={false}
                    maxLength={9}
                    onChangeText={(text) => onProductPriceInput(text.replace(/[^0-9]/g, ''))}
                    value={productPrice ? productPrice.toLocaleString('en') : ''}
                />
                {this.renderHorizontalBorder()}
            </View>
        );
    }

    renderProductCategory = () => {
        const { textInputContainerStyle, textInputStyle } = styles;
        const {
            selectedCategory,
            selectedSubCategory,
            changeStateOfCreateAdSpecificationModalView
        } = this.props;

        return (
            <TouchableOpacity style={textInputContainerStyle} onPress={changeStateOfCreateAdSpecificationModalView}>
                {this.renderHeaderText('Category')}
                <TextInput
                    style={textInputStyle}
                    keyboardType='numeric'
                    placeholder='Choose Category'
                    pointerEvents='none'
                    value={`${selectedCategory + '/' + selectedSubCategory}`}
                />
                {this.renderHorizontalBorder()}
            </TouchableOpacity>
        );
    }

    renderProductCondition = () => {
        const { textInputContainerStyle } = styles;
        const { selectedProductCondition, setProductConditionUsed, setProductConditionNew } = this.props;

        return (
            <View style={textInputContainerStyle}>
                {this.renderHeaderText('Product Condition')}
                <ConditionSelector
                    selectedItem={selectedProductCondition}
                    setProductConditionUsed={setProductConditionUsed}
                    setProductConditionNew={setProductConditionNew}
                />
            </View>
        );
    }

    renderProductDescription = () => {
        const { textInputContainerStyle, textInputStyle } = styles;
        const { changeStateOfproductDescriptionModalView } = this.props;

        return (
            <TouchableOpacity style={textInputContainerStyle} onPress={changeStateOfproductDescriptionModalView}>
                {this.renderHeaderText('Description')}
                <TextInput
                    style={textInputStyle}
                    placeholder='Product Details'
                    pointerEvents='none'
                    value={null}
                />
                {this.renderHorizontalBorder()}
            </TouchableOpacity>
        );
    }

    getSelectedLocationString = () => {
        const { selectedLocation } = this.props;
        let location = '';

        for (let value of selectedLocation) {
            let obj = districts.find((item) => { return item.id == value });

            location = location + obj.name + ', ';
        }
        return location;
    }

    renderProductLocation = () => {
        const { textInputContainerStyle, textInputStyle } = styles;
        const {
            changeStateOfSelectLocationModalView,
            selectedLocation,
            updateSelectedLocations
        } = this.props;

        return (
            <TouchableOpacity style={textInputContainerStyle} onPress={changeStateOfSelectLocationModalView}>
                {this.renderHeaderText('Location')}
                <Text
                    style={textInputStyle}
                    placeholder='Choose Location'
                    pointerEvents='none'
                    ellipsizeMode='tail'
                    numberOfLines={1}
                >
                    {this.getSelectedLocationString()}
                </Text>
                {this.renderHorizontalBorder()}
            </TouchableOpacity>
        );
    }

    renderProductTitleDivider = (title, placeholder, value, onPress) => {
        const { titleDividerStyle, textInputContainerStyle, photoViewDividerTextstyle } = styles;
        return (
            <View style={textInputContainerStyle} >
                <FormLabel>{title}</FormLabel>
                <TouchableOpacity onPress={onPress}>
                    <FormInput
                        value={value}
                        pointerEvents="none"
                        placeholder={placeholder}
                        onChangeText={null} />
                </TouchableOpacity>
            </View>
        );
    }

    renderFloatingShareButton = () => {
        const { floatingShareButtonStyle, floatingButtonContainerStyle } = styles;

        return (
            <View style={floatingShareButtonStyle}>
                <Icon
                    raised
                    name='chevron-thin-right'
                    type="entypo"
                    color="#DAA520"
                    containerStyle={floatingButtonContainerStyle}
                    onPress={null}
                />
            </View>
        );
    }

    render() {
        const { mainConatinerStyle } = styles;
        const {
            isCreateAdSpecificationModalViewVisible,
            isSelectLocationModalViewVisible,
            changeStateOfCreateAdSpecificationModalView,
            changeStateOfSelectLocationModalView,
            updateProductDetails,
            isProductDescriptionModalViewVisible,
            changeStateOfproductDescriptionModalView,
            selectedLocation,
            updateSelectedLocations
        } = this.props;

        return (
            <View style={mainConatinerStyle}>
                <ParallaxScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    backgroundColor="#FFFFFF"
                    stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={SLIDER_HEIGHT}
                    renderForeground={() => (
                        <View style={{ height: SLIDER_HEIGHT, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            {this.renderImageView()}
                        </View>
                    )}
                >
                    {this.renderProductTitleInput()}
                    {this.renderProductCategory()}
                    {this.renderProductPrice()}
                    {this.renderProductCondition()}
                    {this.renderProductLocation()}
                    {this.renderProductDescription()}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isCreateAdSpecificationModalViewVisible}
                        onRequestClose={null}
                    >
                        <CategorySelector
                            changeStateOfCreateAdSpecificationModalView={changeStateOfCreateAdSpecificationModalView}
                            updateProductDetails={updateProductDetails}
                        />
                    </Modal >
                </ParallaxScrollView>
                {this.renderFloatingShareButton()}
                <LocationSelector
                    isSelectLocationModalViewVisible={isSelectLocationModalViewVisible}
                    changeStateOfSelectLocationModalView={changeStateOfSelectLocationModalView}
                    selectedLocation={selectedLocation}
                    updateSelectedLocations={updateSelectedLocations}
                />
                <ProductDetailsInput
                    isVisible={isProductDescriptionModalViewVisible}
                    changeStateOfproductDescriptionModalView={changeStateOfproductDescriptionModalView}
                />
            </View >
        );
    }
}

const window = Dimensions.get('window');

const STICKY_HEADER_HEIGHT = (110 / 768) * window.height;
const SLIDER_HEIGHT = window.width / 1.7;
const cardWidth = (window.width / 3);
const cardHeight = cardWidth + 40;

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    floatingShareButtonStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35
    },
    containerStyle: {
        alignSelf: 'center',
        width: window.width,
        overflow: 'hidden',
        height: SLIDER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide1: {
        height: SLIDER_HEIGHT,
        width: window.width,
        position: 'absolute',
        bottom: 0,
        marginLeft: window.width / 2,
        backgroundColor: '#FFFFFF'
    },
    titleTextStyle: {
        color: '#FFFFFF',
        fontSize: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        textAlign: 'center',
    },
    decsriptionTextStyle: {
        // color: '#00',
        fontSize: 16,
        //fontStyle: 'italic',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        bottom: 5,
        // textAlign: 'justify' //The value 'justify' is only supported on iOS and fallbacks to left on Android.
    },
    boldSeparator: {
        color: Colors.golden,
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 5,
        marginBottom: 10
    },
    floatingButtonContainerStyle: {
        backgroundColor: Colors.dark,
        borderWidth: 0.5,
        borderColor: Colors.golden
    },
    semiTransparentViewStyle: {
        height: SLIDER_HEIGHT, // same width and height for the container
        width: window.width,
        position: 'absolute',
        backgroundColor: 'rgba(60, 60, 60, 0.5)'
    },
    specificationTextStyle: {
        color: Colors.dark,
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10
    },
    dateTextStyle: {
        color: '#FFFFFF',
        fontSize: 12,
        paddingBottom: 10
    },
    textContainerStyle: {
        height: SLIDER_HEIGHT, // same width and height for the container
        width: window.width,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    textInputContainerStyle: {
        flexDirection: 'column',
        margin: 25,
        justifyContent: 'center',
    },
    titleDividerStyle: {
        height: 1,
        backgroundColor: Colors.golden,
        flex: 1,
        marginTop: 5
    },
    photoViewDividerTextstyle: {
        color: Colors.dark,
        fontStyle: 'italic',
        fontSize: 20
    },
    photoCardStyle: {
        width: cardWidth,
        height: cardHeight,
        backgroundColor: '#F7F7F7',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5
    },
    imageRowStyle: {
        height: cardHeight,
        width: cardWidth,
        resizeMode: 'cover'
    },
    imageViewFlatListContainerStyle: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 5,
        marginBottom: 20
    },
    productCategoryContainerstyle: {
        flexDirection: 'column'
    },
    headerTextStyle: {
        fontSize: 18,
        color: Colors.dark
    },
    textInputStyle: {
        paddingVertical: 15,
        color: Colors.lightDark
    }
});

export default CreateAd;
