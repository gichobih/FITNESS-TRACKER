import React from "react";
import styled from "styled-components";
import { BarChart } from "@mui/x-charts/BarChart";
// Component Description:
// The `WeeklyStatCard` component is a reusable card designed to display a bar chart of weekly calories burned. 
// It uses styled-components for styling and the `BarChart` component from the Material-UI library to render the chart. 
// The data for the chart is passed as a prop to the component.

// Main functional component
const WeeklyStatCard = ({ data }) => {
  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.totalWeeksCaloriesBurnt && (
        <BarChart
          xAxis={[
            { scaleType: "band", data: data?.totalWeeksCaloriesBurnt?.weeks },
          ]}
          series={[{ data: data?.totalWeeksCaloriesBurnt?.caloriesBurned }]}
          height={300}
        />
      )}
    </Card>
  );
};

export default WeeklyStatCard;
// Styled component for the card container
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
// Styled component for the title text
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;