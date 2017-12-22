import React from "react";
import styled from "styled-components/native";
import Touchable from "@appandflow/touchable";

const AddDataButton = styled(Touchable).attrs({
  feedback: "opacity",
  /* prettier-ignore */
  hitSlop: { top: 20, bottom: 20, right: 20, left: 20 }
})`
  /* prettier-ignore */
  marginLeft: ${props => (props.side === "left" ? 15 : 0)}
  /* prettier-ignore */
  marginRight: ${props => (props.side === "right" ? 15 : 0)}
  /* prettier-ignore */
  justifyContent: center;
  /* prettier-ignore */
  alignItems: center;
`;

export default function AddDataButtonHeader({
  side,
  children,
  onPress,
  disabled
}) {
  return (
    <AddDataButton onPress={onPress} disabled={disabled} side={side}>
      {children}
    </AddDataButton>
  );
}
