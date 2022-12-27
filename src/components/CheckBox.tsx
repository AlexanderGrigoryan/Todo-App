import React, { useState } from "react";
import styled from "styled-components";
import check from "../img/icon-check.svg";

function CheckBox() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Content
      checked={checked}
      onClick={() => {
        setChecked(!checked);
      }}
    >
      {checked ? <Image src={check} alt="checked" /> : null}
    </Content>
  );
}

export default CheckBox;

const Image = styled.img`
  width: 8.7px;
  height: 6px;
`;

const Content = styled.button(
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
