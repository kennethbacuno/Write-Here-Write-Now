import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authenticate" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default App;
