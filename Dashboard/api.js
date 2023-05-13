// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDAWqZNafEY94jTwrNBSlBRJcfEpD5Lkek',
  authDomain: 'chat-df7bc.firebaseapp.com',
  projectId: 'chat-df7bc',
  storageBucket: 'chat-df7bc.appspot.com',
  messagingSenderId: '748221610899',
  appId: '1:748221610899:web:694562d92801a176e10666',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var myName = prompt('Enter Yourname');

function sendMessage() {
  // get message
  var message = document.getElementById('message').value;

  // save in database
  firebase.database().ref('messages').push().set({
    "sender": myName,
    "message": message,
  });

  // prevent form from submitting
  return false;
}

function deleteMessage(self) {
  // get message ID
  var messageId = self.getAttribute('data-id');

  // delete message
  firebase.database().ref('messages').child(messageId).remove();
}

// attach listener for delete message
firebase
  .database()
  .ref('messages')
  .on('child_removed', function (snapshot) {
    // remove message node
    document.getElementById('message-' + snapshot.key).innerHTML = 'This message has been removed';
  });
