
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "/pages/HomePage";
import ViewPostPage from "/pages/ViewPostPage";
import PageNotFound from "/pages/PageNotFound";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<ViewPostPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
