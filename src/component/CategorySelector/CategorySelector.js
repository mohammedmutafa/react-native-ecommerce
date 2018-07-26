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
    parentTitleTextStyle,
    rowStyle,
    rowTextStyle,
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
            selectedParentCaterory: undefined,

            selectedCategory: undefined,
            selectedSubCategory: undefined
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
                backgroundColor: Color.placeholderWhite
            }}
            />
        );
    }

    renderMainCategoryRow = ({ item }) => {
        const { selectedCategory, selectedSubCategory } = this.props;
        let isSelected = ((selectedCategory && (item.title === selectedCategory)) || (selectedSubCategory && (item.title === selectedSubCategory))) ? true : false;

        return (
            <TouchableOpacity
                style={isSelected ? [rowStyle, { backgroundColor: Color.placeholderWhite }] : rowStyle}
                onPress={() => this.drillDown(item)}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Icon
                        name={item.iconName}
                        type={item.iconType}
                        underlayColor="transparent"
                        color={Color.lightDark}
                        size={30}
                    />

                    <Text style={rowTextStyle}>{item.title}</Text>
                </View>
                {
                    item.children ?
                        <Icon
                            name="chevron-right"
                            type="evilicon"
                            size={30}
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

        /**
         * Without setting this prop, FlatList would not know it needs to re-render any items because it is also a PureComponent 
         * and the prop comparison will not show any changes.
         */
        const doUpdateFlatList = { selectedCategory, selectedSubCategory }

        return (
            <View>
                <View style={level2TitleHeaderContainerStyle}>
                    <Text style={parentTitleTextStyle}>{parentDataSourceTitle}</Text>
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
                        extraData={doUpdateFlatList}
                        renderItem={this.renderMainCategoryRow}
                        removeClippedSubviews={false}
                        keyExtractor={this.keyExtractor}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
                <View style={[level2TitleHeaderContainerStyle, { backgroundColor: Color.dark, borderTopWidth: 1, borderTopColor: Color.golden }]}>
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
                onRequestClose={() => null}
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
