import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ExperienceComponent from "../components/Experience";
import LayoutComponent from "../components/Layout";
import SkillsComponent from "../components/Skills";
import WorksComponent from "../components/Works";
import {LinkedAnimate} from "../components/LinkedAnimated";

export default function Router() {
  return (
    <BrowserRouter>
      <LayoutComponent>
        <Routes>
          <>
            <Route path="/" element={<App />} />
            <Route path="/works" element={<></>} />
            <Route path="/portafolio" element={<WorksComponent/>} />
            <Route path="/experience" element={<ExperienceComponent />} />
            <Route path="/skils" element={<SkillsComponent />} />
          </>
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  );
}
