import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme
      accentColor="gray"
      grayColor="gray"
      appearance="dark"
      radius="large"
      panelBackground="translucent"
      className="AppMain"
    >
      <App />
    </Theme>
  </React.StrictMode>
);
