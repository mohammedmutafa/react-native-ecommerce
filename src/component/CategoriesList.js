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
        const { categoryCardStyle } = styles;
        return (
            <TouchableOpacity onPress={null} style={categoryCardStyle}>
                <Text >
                    {item.text}
                </Text>
            </TouchableOpacity >
        );
    }

    renderCatA = () => {
        return <FlatList
            horizontal={true}
            data={categoryAList}
            renderItem={this.renderCategoryCard}
            removeClippedSubviews={false}
            showsHorizontalScrollIndicator={false}
            // style={scrollViewStyle}
            keyExtractor={this.keyExtractor}
        />
    }

    render() {
        const { mainConatinerStyle } = styles;

        return (
            <ScrollView style={mainConatinerStyle}>
                {this.renderCatA()}
                {this.renderCatA()}
                {this.renderCatA()}
            </ScrollView>
        );
    }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        marginTop: 25,
        marginBottom: 25
    },
    categoryCardStyle: {
        width: window.width / 2,
        height: window.width / 2 - 40,
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        marginHorizontal: 5,
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
    }
});

export default CategoriesList;
