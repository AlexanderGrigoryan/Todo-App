import React from "react";
import styled from "styled-components";
import { Todo } from "../types";
import { css } from "styled-components";

interface Props {
  filtered: string;
  setFiltered: React.Dispatch<React.SetStateAction<string>>;
}

function Filter(props: Props) {
  const { filtered, setFiltered } = props;

  return (
    <Container>
      <Content>
        <All filtered={filtered} onClick={() => setFiltered("All")}>
          All
        </All>
        <Active filtered={filtered} onClick={() => setFiltered("Active")}>
          Active
        </Active>
        <Completed filtered={filtered} onClick={() => setFiltered("Completed")}>
          Completed
        </Completed>
      </Content>
    </Container>
  );
}

export default Filter;

const Container = styled.div`
  width: 100%;
  height: 48px;
  background: #ffffff;
  box-shadow: 0px 35px 50px -15px #c2c3d680;
  border-radius: 5px;
  margin-top: 16px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 18px;
`;

// const Note = styled.p(
//   (props: { completed: boolean }) => css`
//     font-family: "Josefin Sans", sans-serif;
//     font-size: 18px;
//     font-weight: 400;
//     line-height: 18px;
//     letter-spacing: -0.25px;
//     color: ${props.completed ? "#D1D2DA" : "#494c6b"};
//     text-decoration: ${props.completed ? "line-through" : "none"};
//   `
// );

const All = styled.button(
  (props: { filtered: string }) => css`
    font-family: "Josefin Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: -0.1944444477558136px;
    border: 0;
    background: inherit;
    cursor: pointer;
    color: ${props.filtered === "All" ? "#3A7CFD" : "#9495a5"};

    &:hover {
      color: ${props.filtered === "All" ? "#1559e0" : "#494c6b"};
    }
  `
);

const Active = styled.button(
  (props: { filtered: string }) => css`
    font-family: "Josefin Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: -0.1944444477558136px;
    border: 0;
    background: inherit;
    cursor: pointer;
    color: ${props.filtered === "Active" ? "#3A7CFD" : "#9495a5"};

    &:hover {
      color: ${props.filtered === "Active" ? "#1559e0" : "#494c6b"};
    }
  `
);

const Completed = styled.button(
  (props: { filtered: string }) => css`
    font-family: "Josefin Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: -0.1944444477558136px;
    border: 0;
    background: inherit;
    cursor: pointer;
    color: ${props.filtered === "Completed" ? "#3A7CFD" : "#9495a5"};

    &:hover {
      color: ${props.filtered === "Completed" ? "#1559e0" : "#494c6b"};
    }
  `
);
