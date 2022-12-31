import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import LayoutComponent from "../components/Layout";

export default function Router() {
  return (
    <BrowserRouter>
      <LayoutComponent>
        <Routes>
          <Route path="*"  element={<App />} />
          <Route path="/:id" element={<App />} />
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  );
}
