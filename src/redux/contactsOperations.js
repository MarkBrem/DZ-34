import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  return fetch(
    `https://68e3eee48e116898997a7c6b.mockapi.io/contacts/contacts`
  ).then(res => res.json());
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    };

    try {
      const response = await fetch(
        `https://68e3eee48e116898997a7c6b.mockapi.io/contacts/contacts`,
        options
      );
      if (!response.ok) {
        throw new Error('Не вдалося додати контакт');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    const options = { method: 'DELETE' };

    try {
      const response = await fetch(
        `https://68e3eee48e116898997a7c6b.mockapi.io/contacts/contacts/${id}`,
        options
      );
      if (!response.ok) {
        throw new Error('Не вдалося видалити контакт');
      }
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
