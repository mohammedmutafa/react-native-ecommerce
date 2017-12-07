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
        const { evenCategoryCardStyle, oddCategoryCardStyle } = styles;
        const isEven = item.id % 2 === 0;

        return (
            <TouchableOpacity onPress={null} style={isEven ? evenCategoryCardStyle : oddCategoryCardStyle}>
                <Text >
                    {item.text}
                </Text>
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

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        marginTop: 25,
        marginBottom: 25,
        marginHorizontal: 10
    },
    evenCategoryCardStyle: {
        width: (window.width / 2) - 15,
        height: (window.width / 2) - 15,
        backgroundColor: '#F7F7F7',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5
    },
    oddCategoryCardStyle: {
        width: (window.width / 2) - 15,
        height: (window.width / 2) - 15,
        backgroundColor: '#F7F7F7',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CategoriesList;
