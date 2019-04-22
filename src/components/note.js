/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import '../style.scss';
import marked from 'marked';
import * as db from '../services/datastore';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      text: this.props.note.text,
      x: 0,
      y: 0,
      zIndex: 0,
      isEditing: false,
    };
    this.delNote = this.delNote.bind(this);
    this.onInputChangeTitle = this.onInputChangeTitle.bind(this);
    this.onInputChangeText = this.onInputChangeText.bind(this);
    this.editNote = this.editNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }


  onInputChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  onInputChangeText(event) {
    this.setState({ text: event.target.value });
  }

  editNote() {
    // this.props.editNote(this.props.id);
    this.setState({ isEditing: true });
  }

  saveNote() {
    this.props.editNote(this.props.id, { title: this.state.title, text: this.state.text });
    this.setState({ isEditing: false });
  }

  handleDrag(e, data) {
    this.setState({ x: data.x, y: data.y });
    this.props.handleDrag(this.props.id, data.x, data.y);
  }

  delNote() {
    this.props.delNote(this.props.id);
  }


  renderEditPart() {
    if (this.state.isEditing) {
      return (
        <Draggable
          handle="#dragger"
          grid={[25, 25]}
          position={{
            x: this.props.note.x, y: this.props.note.y, width: 250, height: 250,
          }}
          onDrag={this.handleDrag}
        >
          <div id="the-note">
            <input onChange={this.onInputChangeTitle} value={this.state.title} />
            <div>
              <i onClick={this.delNote} className="fas fa-trash-alt" />
              <i id="changeButton" onClick={this.saveNote} className="fas fa-save" />
              <i id="dragger" className="fas fa-expand-arrows-alt" />
            </div>
            <input onChange={this.onInputChangeText} value={this.state.text} />
          </div>
        </Draggable>
      );
    } else {
      return (
        <Draggable
          handle="#dragger"
          grid={[25, 25]}
          position={{
            x: this.props.note.x, y: this.props.note.y, width: 350, height: 'auto',
          }}
          onDrag={this.handleDrag}
        >
          <div id="the-note">
            <div id="title-text"> {this.props.note.title}</div>
            <div id="notebButtons">
              <i onClick={this.delNote} className="fas fa-trash-alt" />
              <i id="changeButton" onClick={this.editNote} className="fas fa-pencil-alt" />
              <i id="dragger" className="fas fa-expand-arrows-alt" />
            </div>
            <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />

          </div>
        </Draggable>
      );
    }
  }

  render() {
    return (
      this.renderEditPart()
    );
  }
}

export default Note;
