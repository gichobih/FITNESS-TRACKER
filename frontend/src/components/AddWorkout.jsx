import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

// Main component for adding a new workout
const AddWorkout = ({ workout, setWorkout, addNewWorkout, buttonLoading }) => {
  return (
    <Card>
      {/* Title of the Card */}
      <Title>Add New Workout</Title>
      
      {/* Text input area for workout details */}
      <TextInput
        label="Workout"  // Label for the input field
        textArea  // Make the input area a textarea
        rows={10}  // Define the number of rows for the textarea
        placeholder={`Enter in this format:

#Category
-Workout Name
-Sets
-Reps
-Weight
-Duration`}  // Placeholder text giving the user a format example
        value={workout}  // The current value of the workout input
        handelChange={(e) => setWorkout(e.target.value)}
      />
      
      {/* Button to add the new workout */}
      <Button
        text="Add Workout"
        small
        onClick={() => addNewWorkout()}
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
      />
    </Card>
  );
};

export default AddWorkout;

// Styled Card component with layout and design
const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;  // Gap between elements inside the card
  @media (max-width: 600px) {
    padding: 16px;  // Adjust padding for small screens
  }
`;

// Styled Title component with font size and color
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;  // Adjust font size for small screens
  }
`;