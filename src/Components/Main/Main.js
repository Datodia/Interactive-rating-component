import React, { useState } from "react";
import { Star } from "../Star/Star";
import { Content } from "../Content/Content";
import { Submit } from "../Submit/Submit";
import { Thanks } from "../Thanks/Thanks";
import { ButtonWrapper } from "../Buttonwrapper/ButtonWrapper";
import { SMain } from "./Main.styled";

export const Main = () => {
  const [show, setShow] = useState(true);
  const [rate, setRate] = useState();

  const selectRateButton = (idx) => setRate(idx);

  return (
    <SMain>
      {show && (
        <>
          <Star />
          <Content
            head="How did we do?"
            para="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
          />
          <ButtonWrapper selectRateButton={selectRateButton} />
          <Submit rate={rate} click={() => setShow(false)} />
        </>
      )}
      {!show && (
        <>
          <Thanks rate={rate} />
          <Content
            center={rate}
            head="Thank You!"
            para="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
          />
        </>
      )}
    </SMain>
  );
};
