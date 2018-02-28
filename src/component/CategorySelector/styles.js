import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../utilities/ScreenSize';

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
        height: screenHeight - (225)
    },
    dividerStyle: {
        height: 1,
        backgroundColor: '#DAA520',
        width: screenWidth - 50,
        marginTop: 5
    },
    cancelTextStyle: {
        paddingLeft: 25,
        fontSize: 20,
        color: '#DAA520'
    }
});

