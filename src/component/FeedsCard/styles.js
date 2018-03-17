import { StyleSheet, Platform } from 'react-native';

import { screenWidth } from '../../utilities/ScreenSize';
import colors from '../../styles/Color';

const containerWidth = screenWidth;
const containerHeight = containerWidth * 0.8;

export default StyleSheet.create({
    container: {
        width: containerWidth,
        height: containerHeight,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F7F7F7',
        marginVertical: 5
    },
    detailContainerStyle: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        flex: 0.8
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileConatiner: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageViewStyle: {
        backgroundColor: '#D7D7D7',
        resizeMode: 'cover',
        flex: 4
    },
    nameTextStyle: {
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.dark,
        alignSelf: 'center'
    },
    productTitleTextStyle: {
        color: colors.dark,
        marginVertical: 10,
        flex: 0.8,
        fontSize: 14,
        marginHorizontal: 15
    }
});
