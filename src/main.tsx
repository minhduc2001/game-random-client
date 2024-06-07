import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";

declare global {
  interface Window {
    myAPI: {
      example: () => string;
    };
  }
}

function Root() {
  useEffect(() => {
    if (window.myAPI) {
      console.log(window.myAPI.example());
    }
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
