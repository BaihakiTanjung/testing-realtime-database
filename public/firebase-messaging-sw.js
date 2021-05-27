importScripts('https://www.gstatic.com/firebasejs/4.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.5.0/firebase-messaging.js');

var config = {
  apiKey: 'AIzaSyCXibebLl8qoGGPzgLY-maMX2G7K3TaJiA',
  authDomain: 'vue-http-demo-536f3.firebaseapp.com',
  databaseURL: 'https://vue-http-demo-536f3-default-rtdb.firebaseio.com',
  projectId: 'vue-http-demo-536f3',
  storageBucket: 'vue-http-demo-536f3.appspot.com',
  messagingSenderId: '545186363505'
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const title = 'exaq';
  const options = {
    body: payload.notification,
    icon: 'https://exaq.id/x.png'
  };
  return self.registration.showNotification(title, options);
});
