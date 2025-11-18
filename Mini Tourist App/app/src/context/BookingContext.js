import React, { createContext, useContext, useReducer } from 'react';

const BookingContext = createContext();

const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOKING_DATA':
      return {
        ...state,
        bookingData: { ...state.bookingData, ...action.payload }
      };
    case 'CLEAR_BOOKING_DATA':
      return {
        ...state,
        bookingData: null
      };
    default:
      return state;
  }
};

const initialState = {
  bookingData: null
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};