import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";

function App() {
  // Mocking a user to bypass authentication
  const mockUser = {
    id: "12345",
    name: "Test User",
    email: "testuser@example.com",
  };

  const currentUser = mockUser; // Always treat user as logged in

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar currentUser={currentUser} />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/workouts" exact element={<Workouts />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;
