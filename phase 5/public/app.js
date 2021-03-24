document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();

    const db = firebase.firestore();

    const myPost = db.collection('posts').doc('firepost');

    myPost.get() 
        .then(doc => { 

            const data = doc.data();
            document.write( data.title + `<br>`)
            document.write( data.views )
            
        }) // .get is an asynchronous operation that returns a promise

});

// function googleLogin() {
//     const provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider)
//     .then(result => {
//         const user = result.user;
//         document.write(`Hello ${user.displayName}`);
//         console.log(user)
//     }).catch(console.log) // as firebase.auth() is a promise, .then will execute any code on completion
// }