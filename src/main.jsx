import React, { Children } from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Assessment from "./pages/assessment.jsx";
import App from "./App.jsx";
import "./index.css";
import MainComponent from "./components/mainComponent.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={ <MainComponent />} />
      <Route path="/assessment" element={ <Assessment />} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
