import React from "react";
import { useSelector } from "react-redux";

// TASK
// Display the number of tries, i.e 'You've tried x times'

function Tries() {
  const numberOfTries = useSelector(state => state.tally.tries);
  return <p>You have tried {numberOfTries} times.</p>;
}

export default Tries;
