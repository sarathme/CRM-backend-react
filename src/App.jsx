import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Feedbacks from "./pages/Feedbacks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<h1>Dashboard</h1>} />
            <Route path="queries" element={<h1>Queries</h1>} />
            <Route path="feedbacks" element={<Feedbacks />} />
            <Route path="products" element={<h1>Products</h1>} />
            <Route path="customers" element={<h1>Customers</h1>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
