import React from "react";
import { useSelector } from "react-redux";

// TASK
// Display the number of wins, i.e 'You've won x times'

function Wins() {
  const nbWins = useSelector(state => state.tally.wins);
  return <p>Your gambling addiction has yielded you a measly {nbWins} wins.</p>;
}

export default Wins;
