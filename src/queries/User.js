import firebase from 'react-native-firebase';

export const createNewUser = (id) => {

    let userRef = firebase.firestore().collection('users').doc('7829366565');

    let data = {
        id: '7829366565'
    };

    let getDoc = userRef.get()
        .then((doc) => {
            if (!doc.exists) {
                console.log('No such document!');
                userRef.set(data).then(() => {
                    // update successful (document exists)
                    console.log('update successful');
                }).catch((error) => {
                    console.log(error);
                });
            } else {
                console.log('Document data:', doc.data());
            }
        }).catch((err) => {
            console.log('Error getting document', err);
        });

    /* this.afs.doc(`users/${uid}`)
         .update({ data })
         .then(() => {
             // update successful (document exists)
         })
         .catch((error) => {
             // console.log('Error updating user', error); // (document does not exists)
             this.afs.doc(`users/${result.uid}`)
                 .set({ data });
         });
 
 
     var cityRef = db.collection('cities').doc('SF');
 
     var getDoc = cityRef.get()
         .then(doc => {
             if (!doc.exists) {
                 console.log('No such document!');
             } else {
                 console.log('Document data:', doc.data());
             }
         })
         .catch(err => {
             console.log('Error getting document', err);
         });*/
}
