import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "pages/b - homePage";      //===> jsconfig.json > "src"
import LoginPage from "pages/c - loginPage";
import ProfilePage from "pages/d - profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";            //===> check "./theme"

function App() {
  const mode = useSelector((state) => state.mode);            //===> grab mode
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);      
  const isAuth = Boolean(useSelector((state) => state.token));      //====> if token exist then give authorization

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
