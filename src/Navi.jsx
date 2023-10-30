import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './Notes';
import Task from './Task';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Redux Provider
import store from './Store'; // Import your Redux store

function Navi() {
  return (
    <Provider store={store}> {/* Provide the Redux store */}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task" element={<Task />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default Navi;
