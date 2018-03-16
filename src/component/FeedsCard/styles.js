import { StyleSheet, Platform } from 'react-native';

import { screenWidth } from '../../utilities/ScreenSize';
import colors from '../../styles/Color';

const containerWidth = screenWidth - 30;
const containerHeight = containerWidth * 0.8;

export default StyleSheet.create({
    container: {
        width: containerWidth,
        height: containerHeight,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F7F7F7',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 3, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 5
            },
            android: {
                elevation: 2
            }
        })
    },
    detailContainerStyle: {
        padding: 15,
        flex: 1
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
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.dark
    },
    productTitleTextStyle: {
        color: colors.dark,
        marginVertical: 10
    }
});
