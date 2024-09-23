import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  /**
   QueryClientProvider say that we used react-query in this project then we use any property of react-query then it will we accessible in any file(component) that why we wrap it into the root folder using this 
   */

  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
