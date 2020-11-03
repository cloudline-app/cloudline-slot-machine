import { ADD_TO_WINS, ADD_TO_TRIES, RESET_TALLY, DISABLE_MACHINE } from "../actions/types";

const tallyState = { wins: 0, tries: 0, disabled: false };

export const listTally = (state = tallyState, action) => {
  switch (action.type) {
    case ADD_TO_WINS:
      // ED - replaced += with +. potential bug - not sure if it was intentional?
      return { ...state, wins: (state.wins + 1) };
      // TASK
      // Increase the number of tries by 1 with type ADD_TO_TRIES
    case ADD_TO_TRIES: 
      return {
        ...state,
        tries: state.tries + 1
      }
        // TASK
        // Reset the state values back to 0 with type RESET_TALLY
    case RESET_TALLY:
      return tallyState;
 
    case DISABLE_MACHINE:
      return {
        ...state,
        disabled: true
      }
    default:
      return state;
  }
};
