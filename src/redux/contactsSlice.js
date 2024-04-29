import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const isContactExists = state.some(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      isContactExists
        ? toast(`Contact "${action.payload.name}" already exists`)
        : state.push({ ...action.payload, id: nanoid() });
    },

    deleteContact(state, action) {
      const idx = state.findIndex(({ id }) => id === action.payload);
      state.splice(idx, 1);
    },
  },
});

const { addContact, deleteContact } = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;

export { addContact, deleteContact, contactsReducer };
