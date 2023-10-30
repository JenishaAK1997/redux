// reducers/noteReducer.js
const initialState = {
    notes: [],
  };
  
  const NotesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return { ...state, notes: [...state.notes, action.payload] };
      default:
        return state;
    }
  };
  
  export default NotesReducer;
  