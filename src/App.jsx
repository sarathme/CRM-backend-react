import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Feedbacks from "./pages/Feedbacks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageNotFound from "./pages/PageNotFound";
import Queries from "./pages/Queries";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./contexts/authContextProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import FeedbackStats from "./components/FeedbackStats";
import QueryStats from "./components/QueryStats";
import ProductStats from "./components/ProductStats";
import { Toaster } from "react-hot-toast";

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
      <AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />}>
                <Route index element={<Navigate to="feedbacks" />} />
                <Route path="feedbacks" element={<FeedbackStats />} />
                <Route path="queries" element={<QueryStats />} />
                <Route path="products" element={<ProductStats />} />
              </Route>
              <Route path="queries" element={<Queries />} />
              <Route path="feedbacks" element={<Feedbacks />} />
              <Route path="products" element={<Products />} />
              <Route path="customers" element={<Customers />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          gutter={10}
          toastOptions={{
            style: {
              color: "var(--clr-primary-600)",
              fontSize: "var(--fs-600)",
              padding: "0.6em 1em",
              fontWeight: 700,
            },
            success: {
              iconTheme: {
                primary: "var(--clr-primary-600)",
                secondary: "var(--clr-accent-200)",
              },
            },
            error: {
              duration: 3000,
            },
          }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
