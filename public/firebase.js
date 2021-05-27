/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCXibebLl8qoGGPzgLY-maMX2G7K3TaJiA',
  authDomain: 'vue-http-demo-536f3.firebaseapp.com',
  databaseURL: 'https://vue-http-demo-536f3-default-rtdb.firebaseio.com',
  projectId: 'vue-http-demo-536f3',
  storageBucket: 'vue-http-demo-536f3.appspot.com',
  messagingSenderId: '545186363505',
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging
  .requestPermission()
  .then(function() {
    return messaging.getToken();
  })
  .then(function(token) {
    localStorage.setItem('firbtid', token);
  })
  .catch(function(err) {
    console.log('Terjadi kesalahan', err);
  });
messaging.onMessage(function(payload) {
  // [START_EXCLUDE]
  // Update the UI to include the received message.
  appendMessage(payload);
  // [END_EXCLUDE]
});
