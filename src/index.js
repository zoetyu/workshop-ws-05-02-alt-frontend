// change require to es6 import style
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

// Used this for reference: https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc

let num = 0;
// shows timer is at 0 at beginning
$('#main').html(`You've been on this page for ${num} seconds.`);

function myTimer() {
  setInterval(() => {
    // continually updates timer
    num += 1;
    $('#main').html(`You've been on this page for ${num} seconds.`);
  }, 1000);
}
myTimer();
