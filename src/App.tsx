import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import MainRoutes from "./routes";
import "antd/dist/reset.css";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  useEffect(() => {
    document.body.classList.remove("load");
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
