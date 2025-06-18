import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      {/* Other components like Header or Pages */}

      {/* Sample Routes */}
      <Routes>
        <Route path="/jobs" element={<div>Jobs Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        {/* Add other routes accordingly */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
