window.addEventListener("load", () => {
  // Faster Page Navigation
  import("instant.page");
});

// Enable HMR for development
if (process.env.NODE_ENV !== "production") module.hot.accept();

// Global Styles
import "./index.css";

// Add conditional shims and polyfills
import "@webcomponents/webcomponentsjs/webcomponents-loader";

// Template ID Based Router
import "./router";

// Components
import "./components/counter";

// Partials
import "./partials/navigation";

// Pages
// import "./pages/home";
// import "./pages/about";
