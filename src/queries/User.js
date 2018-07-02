import firebase from 'react-native-firebase';

export const createNewUser = (id) => {
    //Keep doc id as string.
    let userRef = firebase.firestore().collection('users').doc(`${id}`);

    let data = {
        id: `${id}`
    };

    let getDoc = userRef.get()
        .then((doc) => {
            if (!doc.exists) {
                userRef.set(data).then(() => {
                    // update successful (document exists)
                }).catch((error) => {
                    // console.log(error);
                });
            } else {
                // console.log('Document data:', doc.data());
            }
        }).catch((err) => {
            // console.log('Error getting document', err);
        });

    return getDoc;
}
