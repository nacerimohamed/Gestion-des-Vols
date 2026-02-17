import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './flightSlice';
import servicesReducer from './servicesSlice';

export const store = configureStore({
  reducer: {
    flights: flightReducer,
    services: servicesReducer,
  },
});