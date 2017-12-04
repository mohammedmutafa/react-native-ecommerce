import React, { Component } from 'react';
import {
    View,
    Image,
    FlatList,
    StyleSheet,
    Dimensions,
    ScrollView,
    Platform,
    TouchableOpacity,
    Text
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
            // style={scrollViewStyle}
            keyExtractor={this.keyExtractor}
        />
    }

    render() {
        const { mainConatinerStyle } = styles;

        return (
            <View style={mainConatinerStyle}>
                {this.renderCatA()}
            </View>
        );
    }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    categoryCardStyle: {
        width: window.width / 2,
        height: window.width / 2,
        backgroundColor: '#FFFFFF',
        marginTop: 30,
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
