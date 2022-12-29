import React, { useState } from "react";
import styled, { css } from "styled-components";
import check from "../img/icon-check.svg";

interface Props {
  completed: boolean;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  theme: boolean;
}

function InputCheckBox(props: Props) {
  const { completed, setCompleted, theme } = props;
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

export default InputCheckBox;

const Image = styled.img`
  width: 8.7px;
  height: 6px;
`;

interface ContentProps {
  completed: boolean;
  theme: boolean;
}

const Content = styled.button(
  (props: ContentProps) => css`
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
