import React from "react";
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
    min-width: 20px;
    min-height: 20px;
    margin-right: 12px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    background: ${props.completed
      ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)"
      : "none"};
    border: ${props.completed && props.theme
      ? "none"
      : !props.completed && !props.theme
      ? "none"
      : !props.completed && props.theme
      ? "1px solid #e3e4f1"
      : props.completed && !props.theme
      ? "1px solid #393A4B"
      : "1px solid #393A4B"};

    @media screen and (min-width: 768px) {
      min-width: 24px;
      min-height: 24px;
    }
  `
);
