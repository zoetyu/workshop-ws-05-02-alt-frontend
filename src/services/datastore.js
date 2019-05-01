/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDSprESfG--BYjFYfOBTuYAZvml1qHfmpI',
  authDomain: 'cs52lab3-sgeller28.firebaseapp.com',
  databaseURL: 'https://cs52lab3-sgeller28.firebaseio.com',
  projectId: 'cs52lab3-sgeller28',
  storageBucket: 'cs52lab3-sgeller28.appspot.com',
  messagingSenderId: '601935660196',
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

export function fetchNotes(callback) {
  database.ref('notes').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}
