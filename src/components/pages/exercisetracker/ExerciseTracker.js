import React from 'react';
import { BalanceCalories } from './components/BalanceCalories';
import { CalorieCount } from './components/CalorieCount';
import { ExerciseList } from './components/ExerciseList';
import { AddExercise } from './components/AddExercise';

import { GlobalProvider } from './context/GlobalState';

import './ExerciseTracker.css'
export default function ExerciseTracker() {
  return (
   <>
    <GlobalProvider>
   
      <div className="body_tracker">
      
        <BalanceCalories />
        <CalorieCount />
        <ExerciseList />
        <AddExercise />
      </div>
    </GlobalProvider>
    </>
  );
}