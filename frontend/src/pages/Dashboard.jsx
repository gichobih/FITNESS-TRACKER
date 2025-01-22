import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { counts } from "../utils/data";
import CountsCard from "../components/cards/CountsCard";
import WeeklyStatCard from "../components/cards/WeeklyStatCard";
import CategoryChart from "../components/cards/CategoryChart";
import AddWorkout from "../components/AddWorkout";
import WorkoutCard from "../components/cards/WorkoutCard";
import { addWorkout, getDashboardDetails, getWorkouts } from "../api";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [workout, setWorkout] = useState(`#Legs
-Back Squat
-5 setsX15 reps
-30 kg
-10 min`);

  // Function to fetch dashboard data
  const dashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getDashboardDetails(token).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };

  // Function to fetch today's workouts
  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    // Get the current date
    const currentDate = new Date().toISOString().split("T")[0];  // Format as YYYY-MM-DD
    await getWorkouts(token, currentDate).then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      setLoading(false);
    });
  };

  const addNewWorkout = async () => {
    console.log("Add Workout button clicked");
    setButtonLoading(true); // Start loading state
  
    try {
      const token = localStorage.getItem("fittrack-app-token");
      if (!token) {
        throw new Error("User is not authenticated. Token not found.");
      }
  
      console.log("Token retrieved:", token);
  
      // Validate the workout state
      if (!workout || workout.trim() === "") {
        throw new Error("Workout data is required and cannot be empty.");
      }
  
      console.log("Workout to be added:", workout);
  
      // Make the API call
      const response = await addWorkout(token, { workoutString: workout });
      console.log("API response:", response.data);
  
      // Refresh the dashboard and today's workouts
      await dashboardData();
      await getTodaysWorkout();
  
      console.log("Workout added successfully!");
    } catch (error) {
      console.error("Error adding workout:", error.message || error);
      alert(error.message || "An error occurred while adding the workout.");
    } finally {
      setButtonLoading(false); // End loading state
    }
  };
  
  

  // Run the functions when component mounts
  useEffect(() => {
    dashboardData();
    getTodaysWorkout();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <FlexWrap>
          {counts.map((item) => (
            <CountsCard key={item.id} item={item} data={data} />
          ))}
        </FlexWrap>

        <FlexWrap>
          <WeeklyStatCard data={data} />
          <CategoryChart data={data} />
          <AddWorkout
            workout={workout}
            setWorkout={setWorkout}
            addNewWorkout={addNewWorkout}
            buttonLoading={buttonLoading}
          />
        </FlexWrap>

        <Section>
          <Title>Todays Workouts</Title>
          <CardWrapper>
            {todaysWorkouts.map((workout, index) => (
              <WorkoutCard key={index} workout={workout} />
            ))}
          </CardWrapper>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction:
  column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;