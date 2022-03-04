import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  ExerciseCaloriess: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteExerciseCalories(id) {
    dispatch({
      type: 'DELETE_ExerciseCalories',
      payload: id
    });
  }

  function AddExercise(ExerciseCalories) {
    dispatch({
      type: 'ADD_ExerciseCalories',
      payload: ExerciseCalories
    });
  }

  return (<GlobalContext.Provider value={{
    ExerciseCaloriess: state.ExerciseCaloriess,
    deleteExerciseCalories,
    AddExercise
  }}>
    {children}
  </GlobalContext.Provider>);
}