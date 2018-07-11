import firebase from 'react-native-firebase';

export const postCollectionRef = firebase.firestore().collection('posts');
export const userCollectionRef = firebase.firestore().collection('users');

export const getPostStorageLocation = (userId, postId, imageIndex) => {

    return `/images/${userId}/${postId}/image_${imageIndex}`;
    /**
     * Index 0 : Cover Image
     * Index 1-6 : Other Images
     */
};

export const getPostThumbnailURLFromRef = (imageLocation) => {
    // Create a reference to the file we want to download
    let imageRef = firebase.storage().ref(imageLocation);

    // Get the download URL
    imageRef.getDownloadURL().then(function (url) {
        // Insert url into an <img> tag to "download"
        return url;
    }).catch(function (error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case 'storage/object_not_found':
                // File doesn't exist
                break;

            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;

            case 'storage/canceled':
                // User canceled the upload
                break;

            case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
        }
    });
}
