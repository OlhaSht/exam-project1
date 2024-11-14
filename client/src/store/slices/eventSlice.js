import { createSlice } from '@reduxjs/toolkit';

export const submitEvent = (data) => ({
    type: 'SUBMIT_EVENT',
    payload: data,
  });