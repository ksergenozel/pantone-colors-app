import { Routes, Route, Navigate } from "react-router-dom";
import ColorsPage from "@/pages/ColorsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/colors" />} />
      <Route path="/colors" element={<ColorsPage />} />
      <Route path="*" element={<Navigate to="/colors" />} />
    </Routes>
  );
}
