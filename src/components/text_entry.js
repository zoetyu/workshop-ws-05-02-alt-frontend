/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import '../style.scss';
import * as db from '../services/datastore';

class TextEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  onInputChange(event) {
    this.setState({ title: event.target.value });
  }

  addNote() {
    this.props.addNote(this.state.title);
  }

  render() {
    return (
      <div id="text-entry-total">
        <input id="text-entry" onChange={this.onInputChange} value={this.state.title} />
        <button id="text-entry-submit" onClick={this.addNote} type="submit">Post A Note!</button>
      </div>
    );
  }
}

export default TextEntry;
