import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route path="queries" element={<h1>Queries</h1>} />
          <Route path="feedbacks" element={<h1>Feedbacks</h1>} />
          <Route path="products" element={<h1>Products</h1>} />
          <Route path="customers" element={<h1>Customers</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
