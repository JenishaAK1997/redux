import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Import Redux useSelector
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Tasklist() {
  const tasks = useSelector((state) => state.tasks.tasks); // Use Redux selector

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

  return (
    <div className='mylist'>
      <table>
        <tr>
          <td></td>
          <td><h3><i className='fa fa-check-circle-o'></i>My Tasks</h3></td>
        </tr>
      </table>
      <ul className='inner1'>
        {sortedTasks.map((task, index) => (
          <table>
            <tr>
              <td rowSpan="2" width="3%"><i className='fa fa-check-circle-o'></i></td>
              <td>{task.task} </td>
              <td rowSpan="2" width="10%"><i className='fa fa-star'></i></td>
            </tr>
            <tr>
              <td>
                <span className='s1'>  {task.remainingDays} days left</span>
              </td>
            </tr>
          </table>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
