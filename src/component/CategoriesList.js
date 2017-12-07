import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';

import Categories from '../styles/Categories';

const { categoryAList } = Categories;

class CategoriesList extends Component {
    keyExtractor = (item, index) => index;

    renderCategoryCard = ({ item }) => {
        const { evenCategoryCardStyle, oddCategoryCardStyle, imageRowStyle, semiTransparentViewStyle } = styles;
        const isEven = item.id % 2 === 0;

        return (
            <TouchableOpacity onPress={null} style={isEven ? evenCategoryCardStyle : oddCategoryCardStyle}>
                <Image
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/travelBanner.png?alt=media&token=9cb6ab5e-229e-4308-b7a0-5835936e1635' }}
                    style={imageRowStyle}
                />
                <View style={semiTransparentViewStyle} />
            </TouchableOpacity >
        );
    }

    renderCatA = () => {
        return <FlatList
            data={categoryAList}
            renderItem={this.renderCategoryCard}
            removeClippedSubviews={false}
            keyExtractor={this.keyExtractor}
            numColumns={2}
        />
    }

    render() {
        const { mainConatinerStyle } = styles;

        return (
            <ScrollView style={mainConatinerStyle}>
                {this.renderCatA()}
            </ScrollView>
        );
    }
}

const window = Dimensions.get('window');
const cardWidth = (window.width / 2) - 15;

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        marginTop: 25,
        marginBottom: 25,
        marginHorizontal: 10
    },
    evenCategoryCardStyle: {
        width: cardWidth,
        height: cardWidth,
        backgroundColor: '#F7F7F7',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5
    },
    oddCategoryCardStyle: {
        width: cardWidth,
        height: cardWidth,
        backgroundColor: '#F7F7F7',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5
    },
    imageRowStyle: {
        height: cardWidth,
        width: cardWidth,
        resizeMode: 'cover'
    },
    semiTransparentViewStyle: {
        height: cardWidth,
        width: cardWidth,
        position: 'absolute',
        backgroundColor: 'rgba(60, 60, 60, 0.5)'
    }
});

export default CategoriesList;
