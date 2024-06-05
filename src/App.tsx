import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import MainRoutes from "./routes";
import "antd/dist/reset.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  useEffect(() => {
    document.body.classList.remove("load");
  }, []);

  const queryClient = new QueryClient();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
