import React, { useContext } from 'react';
import { ExerciseCalories } from './ExerciseCalories';

import { GlobalContext } from '../context/GlobalState';

export const ExerciseList = () => {
  const { ExerciseCaloriess } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {ExerciseCaloriess.map(ExerciseCalories => (<ExerciseCalories key={ExerciseCalories.id} ExerciseCalories={ExerciseCalories} />))}
      </ul>
    </>
  )
}
