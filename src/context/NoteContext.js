// this page will contain the content for adding and deleting the note
import createDataContext from "./createDataContext";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

const initialState = [];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      // payload is the new note to add to the list of note
      return [...state, action.payload];

    case DELETE_NOTE:
      // filtering out the array of the note by checking if we have the id of the note is not equal to the object in the array, to give the complete new array without one that we want to delete
      return state.filter((note) => note.id !== action.payload);

    default:
      return state;
  }
};

// passing the note that we want to add into the state list of the notes
const addNote = (dispatch) => async (note) => {
  dispatch({ type: ADD_NOTE, payload: note });
};

// this is the action for delete
// we will return id that we want to delete of a note
const deletenote = (dispatch) => async (id) => {
  dispatch({ type: DELETE_NOTE, payload: id });
};

export const { Provider, Context } = createDataContext(
  noteReducer,
  {
    addNote,
    deletenote,
  },
  []
);
