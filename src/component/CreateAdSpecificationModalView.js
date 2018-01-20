import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';

import Categories from '../styles/Categories';

const { categoryList } = Categories;

class CreateAdSpecificationModalView extends Component {

    keyExtractor = (item, index) => index;

    renderMainCategoryRow = ({ item }) => {
        return (
            <ListItem
                title={item.title}
                //chevronColor='#DAA520'
                leftIcon={{ name: item.icon }}
                onPress={null}
            />
        );
    }

    renderMainCategoryList = () => {
        return (
            <FlatList
                bounces={false}
                showsVerticalScrollIndicator={false}
                data={categoryList}
                renderItem={this.renderMainCategoryRow}
                removeClippedSubviews={false}
                keyExtractor={this.keyExtractor}
            />
        );
    }

    render() {
        const { mainConatinerStyle, scrollViewConatinerStyle, semiTransparentLayer } = styles;

        return (
            <View style={mainConatinerStyle}>
                <View style={scrollViewConatinerStyle}>
                    {this.renderMainCategoryList()}
                </View>
            </View>
        );
    }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1,
        padding: 25,
        backgroundColor: 'rgba(60, 60, 60, 0.8)'
    },
    scrollViewConatinerStyle: {
        backgroundColor: '#FFFFFF'
    },
    backButtonStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35
    }
});

export default CreateAdSpecificationModalView;
