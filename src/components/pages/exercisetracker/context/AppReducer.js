export default (state, action) => {
  switch(action.type) {
    case 'DELETE_ExerciseCalories':
      return {
        ...state,
        ExerciseCaloriess: state.ExerciseCaloriess.filter(ExerciseCalories => ExerciseCalories.id !== action.payload)
      }
    case 'ADD_ExerciseCalories':
      return {
        ...state,
        ExerciseCaloriess: [action.payload, ...state.ExerciseCaloriess]
      }
    default:
      return state;
  }
}