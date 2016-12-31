export default function scoreReducers(state = [], action) {
  console.log('action', action);
  switch (action.type) {
    case 'SET_SCORE': {
      const newState = {};
      const newish = state.map((item, idx) => {
        if (item.uid === action.user) {
          item.score = action.score;
        }

        return item;
      });

      return newish;
    }
    case 'INC_SCORE': {
      const newState = {};
      const newish = state.map((item, idx) => {
        if (item.uid === action.user) {
          item.score += action.score;
        }

        return item;
      });

      return newish;
    }
    default:
      return state;

  }

}
