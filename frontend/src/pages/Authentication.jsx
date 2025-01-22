import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../utils/Images/Logo.png";
import AuthImage from "../utils/Images/AuthImage.jpg";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

// TextButton is used for clickable links that allow users to switch between SignIn and SignUp
const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;

const Authentication = () => {
  const [login, setLogin] = useState(false);
  return (
    <Container>
      <Left>
        <Logo src={LogoImage} />
        <Image src={AuthImage} />
      </Left>
      <Right>
        {!login ? (
          <>
            <SignIn />
            <Text>
              Don't have an account?{" "}
              <TextButton onClick={() => setLogin(true)}>SignUp</TextButton>
            </Text>
          </>
        ) : (
          <>
            <SignUp />
            <Text>
              Already have an account?{" "}
              <TextButton onClick={() => setLogin(false)}>SignIn</TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;

// Container for the authentication page layout
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

// Left section of the authentication page that holds the logo and image
const Left = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;

// Styling for the logo image
const Logo = styled.img`
  position: absolute;
  width: 70px;
  top: 40px;
  left: 60px;
  z-index: 10;
`;

// Styling for the background image in the left section
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

// Right section of the page for the authentication form and text
const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

// Text styling for the messages below the form
const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;