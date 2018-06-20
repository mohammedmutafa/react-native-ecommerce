import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import CategoryList from '../../styles/Categories';
import styles from './styles';
import Color from '../../styles/Color';

const {
    mainConatinerStyle,
    semiTransparentContainer,
    scrollViewConatinerStyle,
    level2TitleHeaderContainerStyle,
    level2FlatListContainerStyle,
    dividerStyle,
    cancelTextStyle,
    selectedCategoryTextStyle
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
    }

    drillDown(item) {
        const { drillIndex, selectedParentCaterory } = this.state;
        const { updateProductDetails } = this.props;

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
    }

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
        }
    }

    keyExtractor = (item, index) => index.toString();

    renderSeparator = () => {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                height: StyleSheet.hairlineWidth,
                backgroundColor: Color.placeholderWhite,
                marginVertical: 5
            }}
            />
        );
    }

    renderMainCategoryRow = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}
                onPress={() => this.drillDown(item)}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Icon
                        name={item.icon}
                        // type="ionicon"
                        underlayColor="transparent"
                        color={Color.lightDark}
                        size={30}
                    />

                    <Text style={{ paddingLeft: 10, fontSize: 16, color: Color.dark }}>{item.title}</Text>
                </View>
                {
                    item.children ?
                        <Icon
                            name="ios-arrow-forward-outline"
                            type="ionicon"
                            underlayColor="transparent"
                            color={Color.lightDark}
                        /> : <View />
                }
            </TouchableOpacity>
        );
    };

    renderMainCategoryLevel2 = (dataSource) => {
        const { parentDataSourceTitle, drillIndex } = this.state;
        const { selectedCategory, selectedSubCategory, createAdStatusDone } = this.props;

        return (
            <View>
                <View style={level2TitleHeaderContainerStyle}>
                    <Text style={{ color: Color.dark, fontSize: 18 }}>{parentDataSourceTitle}</Text>
                    {drillIndex === 0 ? <View /> : <Icon
                        name="arrow-up"
                        type="feather"
                        underlayColor="transparent"
                        color={Color.golden}
                        onPress={() => this.drillUP(dataSource)}
                    />}
                </View>
                <View style={dividerStyle} />
                <View style={level2FlatListContainerStyle}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={dataSource}
                        renderItem={this.renderMainCategoryRow}
                        removeClippedSubviews={false}
                        keyExtractor={this.keyExtractor}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
                <View style={level2TitleHeaderContainerStyle}>
                    <Text style={selectedCategoryTextStyle}>{selectedCategory ? (selectedCategory + '/' + '\n' + selectedSubCategory) : ''}</Text>
                    <TouchableOpacity onPress={selectedCategory ? createAdStatusDone : null}>
                        <Text style={cancelTextStyle}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render() {
        return (
            <Modal
                style={mainConatinerStyle}
                transparent={true}
                animationType="slide"
                visible={this.props.isProductCategoryModalViewVisible}
            >
                <View style={semiTransparentContainer}>
                    <View style={scrollViewConatinerStyle}>
                        {this.renderMainCategoryLevel2(this.state.currentDataSource)}
                    </View>
                </View>
            </Modal>
        );
    }
}

CategorySelector.propTypes = {
    isProductCategoryModalViewVisible: PropTypes.bool,
    selectedCategory: PropTypes.string,
    selectedSubCategory: PropTypes.string,
    updateProductDetails: PropTypes.func,
    createAdStatusDone: PropTypes.func
}
