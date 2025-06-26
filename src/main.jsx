import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css"; // TailwindCSS base styles
import { FilterProvider } from './hooks/FilterContext';
import { Profiler } from "react";

// Optional: Enable dark mode if system prefers it
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
<Profiler id="App" onRender={(...args) => console.log(args)}>
      <FilterProvider>
    <App />
        

  {/* <App /> */}
      </FilterProvider>
</Profiler>

  // </React.StrictMode>
);
