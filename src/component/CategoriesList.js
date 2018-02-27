import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import CategoryList from '../styles/Categories';
import * as Animatable from 'react-native-animatable';

const { MainCategory } = CategoryList;
let delayTextAnimationTitle = 0;
let delayTextAnimationCount = 0;

class CategoriesList extends Component {
    keyExtractor = (item, index) => index;

    renderCategoryCard = ({ item }) => {
        const { evenCategoryCardStyle, oddCategoryCardStyle, imageRowStyle, semiTransparentViewStyle, textContainerStyle } = styles;
        const isEven = item.id % 2 === 0;

        delayTextAnimationTitle = delayTextAnimationTitle + 100;
        delayTextAnimationCount = delayTextAnimationCount + 200;

        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateAd')} style={isEven ? evenCategoryCardStyle : oddCategoryCardStyle}>
                <Image
                    source={{ uri: item.thumbnail }}
                    style={imageRowStyle}
                />
                <View style={semiTransparentViewStyle} />
                <View style={textContainerStyle}>
                    <Animatable.Text style={styles.titleTextStyle} animation="fadeInLeft" delay={delayTextAnimationTitle}>{item.title}</Animatable.Text>
                    <View>
                        <Animatable.Text style={styles.itemsCountTextStyle} animation="fadeInLeft" delay={delayTextAnimationCount}>______  805</Animatable.Text>
                        <Animatable.Text style={styles.itemsCountTextStyle} animation="fadeInLeft" delay={delayTextAnimationCount}>           Items</Animatable.Text>
                    </View>
                </View>
            </TouchableOpacity >
        );
    }

    renderCatA = () => {
        return (
            <FlatList
                data={MainCategory}
                renderItem={this.renderCategoryCard}
                removeClippedSubviews={false}
                keyExtractor={this.keyExtractor}
                numColumns={2}
            />
        );
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
        marginBottom: 15,
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
        backgroundColor: 'rgba(60, 60, 60, 0.3)'
    },
    textContainerStyle: {
        height: cardWidth,
        width: cardWidth,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: 'transparent'
    },
    titleTextStyle: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
        padding: 15
    },
    itemsCountTextStyle: {
        color: '#FFFFFF',
        fontSize: 12,
        fontStyle: 'italic',
        paddingLeft: 15,
        bottom: 5,
        //left: 20
    }
});

export default CategoriesList;
