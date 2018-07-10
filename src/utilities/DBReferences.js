import firebase from 'react-native-firebase';

export const postCollectionRef = firebase.firestore().collection('posts');
export const userCollectionRef = firebase.firestore().collection('users');

export const getPostStorageReference = (userId, postId, imageIndex) => {

    return `/images/${userId}/${postId}/image_${imageIndex}`;
    /**
     * Index 0 : Cover Image
     * Index 1-6 : Other Images
     */
};
