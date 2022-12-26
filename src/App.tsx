import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hi</h1>} />
      <Route path="/new" element={<h1>New</h1>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
