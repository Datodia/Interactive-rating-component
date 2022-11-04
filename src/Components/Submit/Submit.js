import { SButton } from "./Submit.styled";

export const Submit = ({ click, rate }) => {
  return (
    <SButton onClick={click} disabled={!rate}>
      Submit
    </SButton>
  );
};
