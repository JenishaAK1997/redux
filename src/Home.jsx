import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import Redux hooks
import { addTask } from './Taskactions'; // Import your task action

import Navbar from './Navbar';
import Noteslist from './Noteslist';
import Tasklist from './Tasklist';

function Home() {
  const tasks = useSelector((state) => state.tasks.tasks); // Use Redux selector
  const dispatch = useDispatch(); // Use Redux dispatch

  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('');

  const [sortedTasks, setSortedTasks] = useState([]);

  useEffect(() => {
    // Sort the tasks by remaining days
    const now = new Date();
    const sorted = tasks
      .map((task) => {
        const taskDate = new Date(task.date);
        const timeDifference = taskDate - now;
        const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return { ...task, remainingDays };
      })
      .sort((a, b) => a.remainingDays - b.remainingDays);

    setSortedTasks(sorted);
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const taskData = {
        task: newTask,
        date: newDate,
      };
      dispatch(addTask(taskData)); // Dispatch the addTask action
      setNewTask('');
      setNewDate('');
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={3} className="menu">
          <Navbar />
        </Col>
        <Col sm={9} className="cons">
          <div>
            <br />
            <h2 className="wel">Welcome John Doe</h2>
            <br />
            <Noteslist />
            <Tasklist tasks={sortedTasks} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
