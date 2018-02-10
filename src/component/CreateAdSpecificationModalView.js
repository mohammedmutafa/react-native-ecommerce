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
import { Icon, ListItem } from 'react-native-elements';

import Categories from '../styles/Categories';

const { categoryList } = Categories;

class CreateAdSpecificationModalView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentDataSourceTitle: 'Main Category',
            dataSource: categoryList
        };
    }

    updateFlatListDataSource(item) {
        if (item.children) {
            this.setState({
                dataSource: item.children,
                parentDataSourceTitle: item.title
            });
        }

    }

    keyExtractor = (item, index) => index;

    renderMainCategoryRow = ({ item }) => {
        return (
            <ListItem
                title={item.title}
                //chevronColor='#DAA520'
                leftIcon={{ name: item.icon }}
                onPress={() => this.updateFlatListDataSource(item)}
            />
        );
    }

    renderMainCategoryLevel2 = (dataSource) => {
        const { level2TitleHeaderContainerStyle, level2FlatListContainerStyle, cancelTextStyle, dividerStyle } = styles;
        const { parentDataSourceTitle } = this.state;

        return (
            <View>
                <View style={level2TitleHeaderContainerStyle}>
                    <Text>{parentDataSourceTitle}</Text>
                    <Icon
                        name="arrow-up"
                        type="feather"
                        color="#DAA520"
                        onPress={null}
                    />
                </View>
                <View style={dividerStyle} />
                <View style={level2FlatListContainerStyle}>
                    <FlatList
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        data={dataSource}
                        renderItem={this.renderMainCategoryRow}
                        removeClippedSubviews={false}
                        keyExtractor={this.keyExtractor}
                    />
                </View>
                <View style={level2TitleHeaderContainerStyle}>
                    <Text></Text>
                    <Text style={cancelTextStyle}>Cancel</Text>
                </View>
            </View>
        );
    }

    render() {
        const { mainConatinerStyle, scrollViewConatinerStyle, semiTransparentLayer } = styles;

        return (
            <View style={mainConatinerStyle}>
                <View style={scrollViewConatinerStyle}>
                    {this.renderMainCategoryLevel2(this.state.dataSource)}
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
    },
    level2TitleHeaderContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
    },
    level2FlatListContainerStyle: {
        flexDirection: 'column',
        height: window.height - (225)
    },
    dividerStyle: {
        height: 1,
        backgroundColor: '#DAA520',
        width: window.width - 50,
        marginTop: 5
    },
    cancelTextStyle: {
        paddingLeft: 25,
        fontSize: 20,
        color: '#DAA520'
    }

});

export default CreateAdSpecificationModalView;
