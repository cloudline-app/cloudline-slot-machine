import React from "react";
import { useSelector } from "react-redux";

// TASK
// Display the number of tries, i.e 'You've tried x times'

function Tries() {
  const { tries } = useSelector(state => state.tally);
  return <p>You have tried {tries} times.</p>;
}

export default Tries;
