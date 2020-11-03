import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToWins, addToTries, resetTally, disableMachine } from "../actions/tallyActions";
import Tries from "./Tries";
import Wins from "./Wins";
import DisabledMessage from "./DisabledMessage";

// ED - small thing that would make me happy.
const color1 = 'red';
const color2 = 'blue';
const color3 = 'yellow';
const defaultColor = 'lightgrey';

const Parent = styled.div`
  height: 100%;
  width: 100%;
  background: #dcdcf3;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SubDiv = styled.div`
  height: 80%;
  width: 40%;
  margin: 20px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: #e09e9e;
`;

const Header = styled.div`
  height: 60px;
  width: 100%;
  background: #cc6d6d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: white;
`;

const Slots = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Slot = styled.div`
  height: 250px;
  width: 180px;
  border: 2px solid black;
`;

const Spin = styled.button`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  background: ${(props) => props.disabled ? defaultColor : 'blue'};
  color: white;
  user-select: none;
  :hover {
    cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
  }
`;

// ED - set to column
const Tally = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  font-size: 20px;
`;

const MainSlotMachine = () => {
  // The dispatch function for dispatching actions when we
  // call our action creators.
  const dispatch = useDispatch();

  // Getting our main tally data from redux state. 
  const { wins, disabled } = useSelector(state => state.tally); // ED - destructured.

  // A few random base colors. To worsen the odds of winning,
  // you can add more colors.
  const baseColors = [color1, color2, color3];  // ED - const'ified.

  // By default, the slot machine colors are all grey. You can change
  // this if you want.

  // ED - set it to a slightly less eye hurting shade of dull.
  const [newColors, setColors] = useState([defaultColor, defaultColor, defaultColor]); 

  // TASK
  // Here is the main spin function which should be called
  // every time we press the Spin button. This function should:
  function spin() {
    // 2. Randomly select a color 3 times from our base colors, and
    const randColors = [...Array(3)].map(() => baseColors[Math.round(Math.random() * 2)]);
    // set them in our local state above, newColors.
    setColors(randColors);
    // 1. Add to our tally tries in the redux state. (i.e dispatch(addToTries()))
    dispatch(addToTries());

    const [c1, c2, c3] = randColors
    if (c1 === c2 && c2 === c3) {
      // 3. If all the colors are the same, we add to our tally wins.
      dispatch(addToWins());
    }
  }

  // TASK
  // In this lifecycle function, of the tally wins reaches 5,
  // have a window.confirm message come up telling the user to 'Stop Gambling!'.
  // on 5 wins the spin button should also become disabled.
  // On selecting 'ok', the tally wins and tries are reset.

  // ED - string much funny.
  useEffect(() => {
    if (wins === 5) {
      const smashedOkay = window.confirm("Stop it. Get some help.");
      if (smashedOkay) {
        dispatch(resetTally());
      } else {
        dispatch(disableMachine());
      }
    }
  }, [wins, dispatch]);

  // TASK
  // Within the Slots div, create 3 slots. (Create a styled component called 'Slot'
  // and render it out 3 times). Their background colors should be those stored
  // in the newColors array. (Use inline styling)

  return (
    <Parent>
      <SubDiv>
        <Slots>
          {newColors.map((color, i) => <Slot key={i} style={{ backgroundColor: color }} />)}
        </Slots>

        <Spin disabled={disabled} onClick={spin}>Spin!</Spin>
      </SubDiv>
      <SubDiv>
        <Header>Tally</Header>
        <Tally>
          {/* ED - added this.*/}
          <DisabledMessage disabled={disabled}/>
          <Tries />
          <Wins />
        </Tally>
      </SubDiv>
    </Parent>
  );
};

export default MainSlotMachine;
