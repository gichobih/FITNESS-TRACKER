import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const AddWorkout = ({ workout, setWorkout, addNewWorkout, buttonLoading }) => {
  return React.createElement(
    Card,
    null,
    React.createElement(
      Title,
      null,
      "Add New Workout"
    ),
    React.createElement(TextInput, {
      label: "Workout",
      textArea: true,
      rows: 10,
      placeholder: `Enter in this format:\n\n#Category\n-Workout Name\n-Sets\n-Reps\n-Weight\n-Duration`,
      value: workout,
      handelChange: (e) => setWorkout(e.target.value),
    }),
    React.createElement(Button, {
      text: "Add Workout",
      small: true,
      onClick: () => addNewWorkout(),
      isLoading: buttonLoading,
      isDisabled: buttonLoading,
    })
  );
};

export default AddWorkout;