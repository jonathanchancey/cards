document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();

    const db = firebase.firestore();

    const productsRef = db.collection('products'); // create reference to the collection

    // const query = productsRef.where('price', '>', 9) // create subset of the collection with .where(field to sort by, operator, value)
    const query = productsRef.orderBy('price', 'desc').limit(2) // order by price descending with a limit of 2 results
    
    query.get()
    .then(products => {
        products.forEach(doc => {
            data = doc.data()
            document.write(`${data.name} at $${data.price} <br>`)
        })

    })


    // const myPost = db.collection('posts').doc('firepost');

    // myPost.onSnapshot(doc => { 

    //     const data = doc.data();
    //     document.querySelector('#title').innerHTML = data.title
    // }) 

    // myPost.onSnapshot(doc => { 

    //     const data = doc.data();
    //     document.write( data.title + `<br>`)
    //     document.write( data.views + `<br>`)
    //     document.write( data.createdAt + `<br>`)
        
    // }) // firebase lets us listen to data in realtime. 
    // onSnapshot returns a realtime stream that we can listen to with a callback function 

    // myPost.get() 
    //     .then(doc => { 

    //         const data = doc.data();
    //         document.write( data.title + `<br>`)
    //         document.write( data.views + `<br>`)
    //         document.write( data.createdAt )
            
    //     }) // .get is an asynchronous operation that returns a promise

});

// function updatePost(e) {
//     const db = firebase.firestore();
//     const myPost = db.collection('posts').doc('firepost');
//     myPost.update({
//         title: e.target.value

//     })
// }

// function googleLogin() {
//     const provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider)
//     .then(result => {
//         const user = result.user;
//         document.write(`Hello ${user.displayName}`);
//         console.log(user)
//     }).catch(console.log) // as firebase.auth() is a promise, .then will execute any code on completion
// }