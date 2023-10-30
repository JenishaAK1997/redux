import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { addNote } from './Notesactions'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import './App.css'
import Navbar from './Navbar';
import Noteslist from './Noteslist';

function Notes() {
  const dispatch = useDispatch(); 
  const [notesTitle, settitle] = useState('');
  const [newNotes, setnotes] = useState('');
  const [newDate, setDate] = useState('');

  const handleAddTask = () => {
    if (newNotes.trim() !== '') {
      const notesData = {
        title: notesTitle,
        notes: newNotes,
        date: newDate,
      };
      dispatch(addNote(notesData));
      setnotes('');
      settitle('');
      setDate('');
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={3} className='menu'>
          <Navbar></Navbar>
        </Col>
        <Col sm={9} className='cons'>
          <div className='note'>
            <h1>Add a Note</h1>
            <input
              type="text"
              value={notesTitle}
              onChange={(e) => settitle(e.target.value)}
              placeholder="Title" className='tasktitle'
            /><br></br>
            <textarea
              type="text"
              value={newNotes}
              onChange={(e) => setnotes(e.target.value)}
              placeholder="Take a note"
              rows="3" cols="55"
            />
            <br></br>
            <label htmlFor="dateInput">Date:</label>
            <input
              type="date"
              value={newDate}
              onChange={(e) => setDate(e.target.value)}
              id="dateInput"
              placeholder=""
            />
            <br></br>
            <button onClick={handleAddTask} className='bt'>Add Task</button>
          </div>
          <Noteslist></Noteslist>
        </Col>
      </Row>
    </Container>
  );
}

export default Notes;
