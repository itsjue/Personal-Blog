import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "/pages/HomePage";
import ViewPostPage from "/pages/ViewPostPage";
import PageNotFound from "/pages/PageNotFound";
import LogInPage from "/pages/LoginPage";
import SignUpPage from "/pages/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<ViewPostPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
