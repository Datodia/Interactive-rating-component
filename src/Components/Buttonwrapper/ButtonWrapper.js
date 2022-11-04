import { SWrapper } from "./Wrapper.styled";
import { Button } from "../Button/Button";

const num_arr = [1, 2, 3, 4, 5];

export const ButtonWrapper = ({ selectRateButton }) => {
  return (
    <SWrapper>
      {num_arr.map((item) => {
        return (
          <Button
            key={item}
            value={item}
            selectRateButton={() => selectRateButton(item)}
          />
        );
      })}
    </SWrapper>
  );
};
