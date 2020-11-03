import React from "react";
import { useSelector } from "react-redux";

// TASK
// Display the number of wins, i.e 'You've won x times'

function Wins() {
  const { wins } = useSelector(state => state.tally);
  return <p>Your gambling addiction has yielded you a measly {wins} wins.</p>;
}

export default Wins;
