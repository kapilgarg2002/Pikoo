import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddExercise = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { AddExercise } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newExerciseCalories = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    AddExercise(newExerciseCalories);
  }

  return (
    <>
      
      <h3>Add new exercise</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Exercise name</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter exercise name..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Calories burnt <br />
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter calories burnt..." />
        </div>
        <button className="btn">Add exercise</button>
      </form>
    </>
  )
}
