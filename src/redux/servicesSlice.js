import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  servicesDisponibles: [
    { id: 'repas', nom: 'Repas', prix: 200, selected: false },
    { id: 'bagages', nom: 'Bagages supplémentaires', prix: 500, selected: false },
    { id: 'premium', nom: 'Siège premium', prix: 1000, selected: false },
    { id: 'wifi', nom: 'Wifi à bord', prix: 150, selected: false }
  ],
  selectedServices: [],
  reservationConfirmee: false
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    toggleService: (state, action) => {
      const serviceId = action.payload;
      const service = state.servicesDisponibles.find(s => s.id === serviceId);
      if (service) {
        service.selected = !service.selected;
        
        if (service.selected) {
          state.selectedServices.push({ ...service });
        } else {
          state.selectedServices = state.selectedServices.filter(s => s.id !== serviceId);
        }
      }
    },
    resetServices: (state) => {
      state.servicesDisponibles.forEach(s => s.selected = false);
      state.selectedServices = [];
      state.reservationConfirmee = false;
    },
    confirmerReservation: (state) => {
      state.reservationConfirmee = true;
    }
  }
});

export const { toggleService, resetServices, confirmerReservation } = servicesSlice.actions;
export default servicesSlice.reducer;