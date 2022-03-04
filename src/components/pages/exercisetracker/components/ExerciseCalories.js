import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const ExerciseCalories = ({ ExerciseCalories }) => {
  const { deleteExerciseCalories } = useContext(GlobalContext);

  const sign = ExerciseCalories.amount < 0 ? '-' : '+';

  return (
    <li className={ExerciseCalories.amount < 0 ? 'minus' : 'plus'}>
      {ExerciseCalories.text} <span>{sign}{moneyFormatter(ExerciseCalories.amount)}</span><button onClick={() => deleteExerciseCalories(ExerciseCalories.id)} className="delete-btn">x</button>
    </li>
  )
}
