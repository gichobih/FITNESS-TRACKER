import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import { UserSignIn } from "../api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/userSlice";

const SignIn = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const validateInputs = () => {
      if (!email || !password) {
        alert("Please fill in all fields");
        return false;
      }
      return true;
    };
  
    const handelSignIn = async () => {
      setLoading(true);
      setButtonDisabled(true);
      if (validateInputs()) {
        await UserSignIn({ email, password })
          .then((res) => {
            dispatch(loginSuccess(res.data));
            alert("Login Success");
            setLoading(false);
            setButtonDisabled(false);
          })
          .catch((err) => {
            alert(err.response.data.message);
            setLoading(false);
            setButtonDisabled(false);
          });
      }
    };
  
    return React.createElement(
      Container,
      null,
      React.createElement(
        "div",
        null,
        React.createElement(Title, null, "Welcome to Fittrack 👋"),
        React.createElement(Span, null, "Please login with your details here")
      ),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            gap: "20px",
            flexDirection: "column",
          },
        },
        React.createElement(TextInput, {
          label: "Email Address",
          placeholder: "Enter your email address",
          value: email,
          handelChange: (e) => setEmail(e.target.value),
        }),
        React.createElement(TextInput, {
          label: "Password",
          placeholder: "Enter your password",
          password: true,
          value: password,
          handelChange: (e) => setPassword(e.target.value),
        }),
        React.createElement(Button, {
          text: "SignIn",
          onClick: handelSignIn,
          isLoading: loading,
          isDisabled: buttonDisabled,
        })
      )
    );
  };
  
  export default SignIn;

  const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;