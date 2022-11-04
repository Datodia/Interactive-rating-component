import React from "react";
import { SRate, STHanks, SThanksImage } from "./Thanks.styled";

export const Thanks = ({ rate }) => {
  return (
    <>
      <STHanks>
        <SThanksImage />
      </STHanks>
      <SRate>You selected {rate} out of 5</SRate>
    </>
  );
};
