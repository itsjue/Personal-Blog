import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import HomePage from "@/pages/HomePage.jsx";
import { NavBar } from "@/components/Nav-Hero-FooterSection.jsx";
import ViewPostPage from "@/pages/ViewPostPage.jsx";
import PageNotFound from "@/pages/PageNotFound.jsx";
import LogInPage from "@/pages/LogInPage.jsx";
import SignUpPage from "@/pages/SignUpPage.jsx";
import AdminLogInPage from "@/pages/adminPages/AdminLogInPage.jsx";
import UserProfilePage from "@/pages/userManagement/UserProfilePage.jsx";
import RegistrationSuccessPage from "@/pages/RegistrationSuccessPage.jsx";
import ArticleManagementPage from "@/pages/adminPages/ArticleManagementPage.jsx";
import AdminCreateArticlePage from "@/pages/adminPages/AdminCreateArticlePage.jsx";
import AdminEditArticlePage from "@/pages/adminPages/AdminEditArticlePage.jsx";

function AppRoutes({ user, setUser }) {
  const location = useLocation();
  const showNavBar = !location.pathname.includes("admin");

  return (
    <>
      {showNavBar && <NavBar user={user} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<ViewPostPage />} />
        <Route path="/login" element={<LogInPage setUser={setUser} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/successfully" element={<RegistrationSuccessPage />} />

        <Route path="/user/profile" element={<UserProfilePage defaultTab="profile" user={user} />} />
        <Route path="/user/resetpassword" element={<UserProfilePage defaultTab="reset" user={user} />} />

        <Route path="/admin-login" element={<AdminLogInPage />} />
        <Route path="/admin-articles" element={<ArticleManagementPage />} />
        <Route path="/admin-article-create" element={<AdminCreateArticlePage />} />
        <Route path="/admin-article-edit/:id" element={<AdminEditArticlePage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <AppRoutes user={user} setUser={setUser} />
    </Router>
  );
}

export default App;
