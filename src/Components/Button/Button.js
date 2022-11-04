import { SButton } from "./Button.styled";

export const Button = ({ value, selectRateButton }) => {
  return <SButton onClick={selectRateButton}>{value}</SButton>;
};
