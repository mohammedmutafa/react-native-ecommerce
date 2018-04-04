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

import CategoryList from '../../styles/Categories';
import styles from './styles';
import color from '../../styles/Color';

const {
    mainConatinerStyle,
    scrollViewConatinerStyle,
    backButtonStyle,
    level2TitleHeaderContainerStyle,
    level2FlatListContainerStyle,
    dividerStyle,
    cancelTextStyle
} = styles;

const { MainCategory } = CategoryList;

export class CategorySelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentDataSourceTitle: 'Main Category',
            currentDataSource: MainCategory,
            drillIndex: 0,
            selectedParentCaterory: undefined
        };
    };

    drillDown(item) {
        const { drillIndex, selectedParentCaterory } = this.state;
        const { updateProductDetails, createAdStatusDone } = this.props;

        if (item.children) {
            const childKey = item.children;

            this.setState({
                parentDataSourceTitle: item.title,
                currentDataSource: CategoryList[childKey],
                selectedParentCaterory: drillIndex === 0 ? item.title : selectedParentCaterory,
                drillIndex: drillIndex + 1,
            });
        } else {
            updateProductDetails('selectedCategory', [selectedParentCaterory, item.title]);
        }
    };

    drillUP(dataSource) {
        const { drillIndex } = this.state;
        const newDrillIndex = drillIndex - 1;

        if (dataSource[0]) {
            const parentKey = dataSource[0].parent;
            const newTitle = newDrillIndex === 0 ? 'Main Category' : dataSource[0].parentTitle;

            this.setState({
                currentDataSource: CategoryList[parentKey],
                parentDataSourceTitle: newTitle,
                drillIndex: newDrillIndex
            });
        };
    };

    keyExtractor = (item, index) => index;

    renderMainCategoryRow = ({ item }) => {
        return (
            <ListItem
                title={item.title}
                underlayColor='transparent'
                titleStyle={{ color: color.dark }}
                chevronColor={color.dark}
                hideChevron={item.children ? false : true}
                leftIcon={{ name: item.icon }}
                onPress={() => this.drillDown(item)}
            />
        );
    };

    renderMainCategoryLevel2 = (dataSource) => {
        const { level2TitleHeaderContainerStyle, level2FlatListContainerStyle, cancelTextStyle, dividerStyle } = styles;
        const { parentDataSourceTitle, drillIndex } = this.state;

        return (
            <View>
                <View style={level2TitleHeaderContainerStyle}>
                    <Text style={{ color: color.golden }}>{parentDataSourceTitle}</Text>
                    {drillIndex === 0 ? <View /> : <Icon
                        name="arrow-up"
                        type="feather"
                        underlayColor='transparent'
                        color={color.golden}
                        onPress={() => this.drillUP(dataSource)}
                    />}
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
                    <TouchableOpacity onPress={this.props.createAdStatusDone}>
                        <Text style={cancelTextStyle}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={mainConatinerStyle}>
                <View style={scrollViewConatinerStyle}>
                    {this.renderMainCategoryLevel2(this.state.currentDataSource)}
                </View>
            </View>
        );
    };
};
