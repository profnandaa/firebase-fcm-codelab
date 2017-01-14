// Initialize Firebase
var config = {
    apiKey: "AIzaSyBKxzkcHHxy3gyPx2kno_nyV7iibXUqycU",
    authDomain: "fcm-codelab.firebaseapp.com",
    databaseURL: "https://fcm-codelab.firebaseio.com",
    storageBucket: "fcm-codelab.appspot.com",
    messagingSenderId: "308663818910"
};
firebase.initializeApp(config);

/* sample

var ref = firebase.database().ref('/users');

ref.set({name: 'Anthony', age: 26})
.then(function(snapshot) {
    console.log('user created', snapshot);
})
.catch(function(err) {
    console.log(err);
});
*/

// messaging object gives us access
// to all the messaging services
var messaging = firebase.messaging();

// request permission from the user
messaging.requestPermission()
    .then(function () {
        console.log('Yay! Thanks :)');
        return messaging.getToken();
    })
    .then(function (token) {
        console.log('token: ', token);
    })
    .catch(function (err) {
        console.log(err);
        console.log('Oh-oh, denied :(');
    });

// receiving a message
messaging.onMessage(function (payload) {
    console.log('onMessage: ', payload);
});