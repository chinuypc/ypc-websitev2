
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import mixpanel from "mixpanel-browser";

  mixpanel.init("36ebcf022dfaf8914069d6a730a60c50", { debug: true, autocapture: true, record_sessions_percent: 100 });

  createRoot(document.getElementById("root")!).render(<App />);
  