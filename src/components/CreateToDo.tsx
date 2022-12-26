import React from "react";
import styled from "styled-components";
import { useState } from "react";
import check from "../img/icon-check.svg";

function CreateToDo() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Container>
      <Content>
        <CheckBox
          checked={checked}
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? <Image src={check} alt="checked" /> : null}
        </CheckBox>
        <Input type="text" placeholder="Create a new todo…" />
      </Content>
    </Container>
  );
}

export default CreateToDo;

const Container = styled.div`
  width: 327px;
  margin-top: -90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const Content = styled.div`
  width: 279px;
  height: 48px;
  padding: 0 24px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
`;

const Input = styled.input`
  width: 275px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: "Josefin Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.1666666716337204px;
  color: #9495a5;
`;

const Image = styled.img`
  width: 8.7px;
  height: 6px;
`;

const CheckBox = styled.button(
  (props: { checked: boolean }) => `
  width: 20px;
  height: 20px;
  margin-right: 12px; 
  border: ${props.checked ? "none" : "1px solid #e3e4f1"} ;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s;
  background: ${
    props.checked ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)" : "none"
  };
`
);
