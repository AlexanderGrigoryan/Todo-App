import React, { useState } from "react";
import styled from "styled-components";
import check from "../img/icon-check.svg";

interface Props {
  completed: boolean;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

function HeaderCheckBox(props: Props) {
  const { completed, setCompleted } = props;
  return (
    <Content
      completed={completed}
      onClick={() => {
        setCompleted(!completed);
      }}
    >
      {completed ? <Image src={check} alt="checked" /> : null}
    </Content>
  );
}

export default HeaderCheckBox;

const Image = styled.img`
  width: 8.7px;
  height: 6px;
`;

const Content = styled.button(
  (props: { completed: boolean }) => `
  width: 20px;
  height: 20px;
  margin-right: 12px; 
  border: ${props.completed ? "none" : "1px solid #e3e4f1"} ;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s;
  background: ${
    props.completed
      ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)"
      : "none"
  };
`
);
