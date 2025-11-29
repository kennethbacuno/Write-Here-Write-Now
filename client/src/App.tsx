import { Route, Routes, Navigate } from "react-router";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./components/Login";
import SignupPage from "./components/Signup";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authenticate/*" element={<AuthPage />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="forgot-password" element={<ForgetPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
