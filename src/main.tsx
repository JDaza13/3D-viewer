import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Viewer from "./Viewer.tsx";
import { Provider } from "@/components/ui/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Viewer />
    </Provider>
  </StrictMode>
);
