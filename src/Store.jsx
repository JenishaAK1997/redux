// store.js
import { createStore, combineReducers } from 'redux';
import TaskReducer from './TaskReducer';
import NotesReducer from './NotesReducer';

const rootReducer = combineReducers({
  tasks: TaskReducer,
  notes: NotesReducer,
});

const Store = createStore(rootReducer);

export default Store;
