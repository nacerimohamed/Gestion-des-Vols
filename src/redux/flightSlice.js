import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Données mockées
const mockFlights = [
  {
    id: "AT123",
    villeDepart: "Rabat",
    villeArrivee: "Dubai",
    date: "25-12-2024",
    heure: "14:30",
    prix: 2500,
    image: "avion1.png",
    services: []
  },
  {
    id: "AT456",
    villeDepart: "Casablanca",
    villeArrivee: "Paris",
    date: "26-12-2024",
    heure: "08:15",
    prix: 1800,
    image: "avion2.png",
    services: []
  },
  {
    id: "AT789",
    villeDepart: "Marrakech",
    villeArrivee: "Londres",
    date: "27-12-2024",
    heure: "16:45",
    prix: 3200,
    image: "avion3.png",
    services: []
  },
  {
    id: "AT101",
    villeDepart: "Tanger",
    villeArrivee: "Barcelone",
    date: "28-12-2024",
    heure: "11:20",
    prix: 1500,
    image: "avion4.png",
    services: []
  },
  {
    id: "AT202",
    villeDepart: "Fès",
    villeArrivee: "Istanbul",
    date: "29-12-2024",
    heure: "23:10",
    prix: 2800,
    image: "avion5.png",
    services: []
  },
  {
    id: "AT303",
    villeDepart: "Agadir",
    villeArrivee: "Bruxelles",
    date: "30-12-2024",
    heure: "06:30",
    prix: 2100,
    image: "avion6.png",
    services: []
  }
];

// Simuler un appel API
export const fetchFlights = createAsyncThunk(
  'flights/fetchFlights',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockFlights);
      }, 1000);
    });
  }
);

const initialState = {
  flights: [],
  filteredFlights: [],
  selectedFlight: null,
  status: 'idle',
  error: null,
  searchCriteria: {
    depart: '',
    arrivee: ''
  }
};

const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setSearchCriteria: (state, action) => {
      state.searchCriteria = action.payload;
    },
    filterFlights: (state) => {
      const { depart, arrivee } = state.searchCriteria;
      if (!depart && !arrivee) {
        state.filteredFlights = state.flights;
      } else {
        state.filteredFlights = state.flights.filter(flight => {
          const matchDepart = !depart || flight.villeDepart.toLowerCase().includes(depart.toLowerCase());
          const matchArrivee = !arrivee || flight.villeArrivee.toLowerCase().includes(arrivee.toLowerCase());
          return matchDepart && matchArrivee;
        });
      }
    },
    selectFlight: (state, action) => {
      state.selectedFlight = action.payload;
    },
    updateFlightServices: (state, action) => {
      const { flightId, services } = action.payload;
      const flightIndex = state.flights.findIndex(f => f.id === flightId);
      if (flightIndex !== -1) {
        state.flights[flightIndex].services = services;
      }
      if (state.selectedFlight && state.selectedFlight.id === flightId) {
        state.selectedFlight.services = services;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.flights = action.payload;
        state.filteredFlights = action.payload;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setSearchCriteria, filterFlights, selectFlight, updateFlightServices } = flightSlice.actions;
export default flightSlice.reducer;