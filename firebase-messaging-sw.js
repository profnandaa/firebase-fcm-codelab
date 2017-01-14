/* Gotcha
This file must be called firebase-messaging-sw.js
and must be placed at the root of the project
*/

importScripts('https://www.gstatic.com/firebasejs/3.6.5/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.6.5/firebase-messaging.js')

// Initialize Firebase again
// since this is a separate module
var config = {
    apiKey: "AIzaSyBKxzkcHHxy3gyPx2kno_nyV7iibXUqycU",
    authDomain: "fcm-codelab.firebaseapp.com",
    databaseURL: "https://fcm-codelab.firebaseio.com",
    storageBucket: "fcm-codelab.appspot.com",
    messagingSenderId: "308663818910"
};
firebase.initializeApp(config);

var messaging = firebase.messaging();
// when the browser is closed
// or user switches away from the tab
messaging.setBackgroundMessageHandler(
    function (payload) {
        var title = 'Hello world';
        var options = {
            body: payload.data.status
        };
        return self.registration.showNotification(title, options);
    }
);
