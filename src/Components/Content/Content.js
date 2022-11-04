import React from "react";
import { SContent, STitle, SPara } from "./Content.styled";

export const Content = ({ head, para, center }) => {
  return (
    <SContent center={center}>
      <STitle>{head}</STitle>
      <SPara>{para}</SPara>
    </SContent>
  );
};
