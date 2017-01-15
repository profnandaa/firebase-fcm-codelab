# firebase-fcm-codelab
Getting quick and dirty with FCM

See demo in action [here](https://profnandaa.github.io/firebase-fcm-codelab/)

To send the notifications, make a POST request similar to the following:

```
https://fcm.googleapis.com/fcm/send
Content-Type: application/json
Authorization: key=AIzaSyC...akjgSX0e4

{ "notification": {
    "title": "Background Message Title",
    "body": "Background message body",
    "click_action" : "https://dummypage.com"
  },

  "to" : "<client-token>"

}
```

**References:**
- https://firebase.google.com/docs/cloud-messaging/js/client
- TL;DR - short video here - https://www.youtube.com/watch?v=BsCBCudx58g
