import { Route } from "react-router-dom";

import Home from "../pages/Home";
import Periods from "../pages/Periods";
import Explore from "../pages/Explore";

import MiddleAges from "../pages/MiddleAges";
import Antiquity from "../pages/Antiquity";
import Rebirth from "../pages/Rebirth";
import Revolutions from "../pages/Revolutions";

import FigurePage from "../pages/figures/FigurePage";

export const MainRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/periods" element={<Periods />} />
    <Route path="/explore" element={<Explore />} />

    <Route path="/periods/middle-ages" element={<MiddleAges />} />
    <Route path="/periods/antiquity" element={<Antiquity />} />
    <Route path="/periods/rebirth" element={<Rebirth />} />
    <Route path="/periods/revolutions" element={<Revolutions />} />


    <Route path="/figures/:slug" element={<FigurePage />} />
  </>
);