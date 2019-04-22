/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
import { Map } from 'immutable';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import firebase from 'firebase';
import TextEntry from './components/text_entry';
import Note from './components/note';
import * as db from './services/datastore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Map(),
    };

    this.addNote = this.addNote.bind(this);
    this.delNote = this.delNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentDidMount() {
    db.fetchNotes((notes) => {
      this.setState({ notes: Map(notes) });
    });
  }

  editNote(id, fields) {
    // this.setState(prevState => ({
    //   notes: prevState.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    // }));
    firebase.database().ref('notes').child(id).update(fields);
  }

  saveNote(id, fields) {
    this.state.isEditing = false;
    firebase.database().ref('notes').child(id).update(fields);
  }

  addNote(title) {
    const note = {
      title,
      text: '',
      x: 0,
      y: 0,
      zIndex: 0,
      isEditing: false,
    };
    // this.setState(prevState => ({
    //   notes: prevState.notes.set(prevState.id, note),
    // }));
    firebase.database().ref('notes').push(note);
  }

  // eslint-disable-next-line class-methods-use-this
  delNote(id) {
    // this.setState(prevState => ({ notes: prevState.notes.delete(id) }));
    firebase.database().ref('notes').child(id).remove();
  }

  handleDrag(id, x, y) {
    // this.setState(prevState => ({
    //   notes: prevState.notes.update(id, (n) => { return Object.assign({}, n, { x, y }); }),
    // }));
    firebase.database().ref('notes').child(id).update({ x, y });
  }

  render() {
    return (
      <div>
        <nav>~ My Sustainable Bulletin Board ~</nav>
        <TextEntry addNote={this.addNote} />
        {this.state.notes.entrySeq().map(([id, note]) => {
          return (
            <Note id={id} note={note} delNote={this.delNote} editNote={this.editNote} saveNote={this.saveNote} handleDrag={this.handleDrag} />
          );
        })}
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
