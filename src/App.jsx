import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "/pages/HomePage";
import ViewPostPage from "/pages/ViewPostPage";
import PageNotFound from "/pages/PageNotFound";
import LogInPage from "/pages/LoginPage";
import SignUpPage from "/pages/SignUpPage";
import AdminLogInPage from "/pages/adminPages/AdminLoginPage";
import MemberProfilePage from "/pages/memberManagement/MemberProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<ViewPostPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/member-profile" element={<MemberProfilePage />} />

        <Route path="/admin-login" element={<AdminLogInPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
