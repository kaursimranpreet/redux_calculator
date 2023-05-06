import React from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import { useSelector, useDispatch } from "react-redux";
import { showConsole } from "./store/features/counterSlice";

const screenButtons = [
  ["C", "**", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {

  const conValue = useSelector((state) => state.calculator.conValue)
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Screen value={conValue} />
      <ButtonBox>
        {
          screenButtons.flat().map((button, i) => {
            return (
              <Button
                key={i}
                className={button === "=" ? "equals" : ""}
                value={button == '**' ? "pow" : button}
                onClick={() => dispatch(showConsole({ button }))}
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
