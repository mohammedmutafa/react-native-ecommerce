import { StyleSheet, Platform } from 'react-native';

import { screenWidth } from '../../utilities/ScreenSize';
import colors from '../../styles/Color';

const containerHeight = screenWidth * 0.7;
const imageViewHeight = containerHeight * 0.65;

export default StyleSheet.create({
    container: {
        width: screenWidth,
        height: containerHeight,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#F7F7F7',
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
        height: imageViewHeight,
        width: screenWidth - 30,
        backgroundColor: '#D7D7D7',
        resizeMode: 'cover'
    },
    nameTextStyle: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.dark
    },
    productTitleTextStyle: {
        color: colors.dark,
        marginVertical: 10
    }
});
