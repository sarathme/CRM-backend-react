import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<h1>App</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
