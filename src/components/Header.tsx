import React from "react";
import styled from "styled-components";
import lightBackground from "../img/bg-mobile-light.jpg";
import darkBackground from "../img/bg-mobile-dark.jpg";
import lightBcgDesktop from "../img/bg-desktop-light.jpg";
import darkBcgDesktop from "../img/bg-desktop-dark.jpg";
import logo from "../img/icon-logo.svg";
import moon from "../img/icon-moon.svg";
import sun from "../img/icon-sun.svg";

function Header(props: {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const toggle = () => {
    props.setTheme(!props.theme);
  };

  return (
    <Container theme={props.theme}>
      <Content>
        <Logo src={logo} alt="logo" />
        <Button onClick={toggle}>
          <ModeLogo src={props.theme ? sun : moon} alt="Mode Logo" />
        </Button>
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.div(
  (props: { theme: boolean }) => `
    background: url(${
      typeof props.theme === "boolean" && props.theme
        ? darkBackground
        : lightBackground
    });
    height: 200px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 48px 24px 0 24px;

    @media screen and (min-width: 768px) {
      background: url(${
        typeof props.theme === "boolean" && props.theme
          ? darkBcgDesktop
          : lightBcgDesktop
      });
      background-repeat: no-repeat;
      background-size: cover;
    }
  `
);

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 540px;
  margin: auto;
`;

const Logo = styled.img``;

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
`;

const ModeLogo = styled.img``;
