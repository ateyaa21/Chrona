import { Route } from "react-router-dom";

import Home from "../pages/Home";

import MiddleAges from "../pages/sections/MiddleAges";
import Antiquity from "../pages/sections/Antiquity";
import Rebirth from "../pages/sections/Rebirth";
import Revolutions from "../pages/sections/Revolutions";

import EventPage from "../pages/content/EventPage";

export const MainRoutes = (
  <>
    <Route path="/" element={<Home />} />

    <Route path="/sections/middle-ages" element={<MiddleAges />} />
    <Route path="/sections/antiquity" element={<Antiquity />} />
    <Route path="/sections/rebirth" element={<Rebirth />} />
    <Route path="/sections/revolutions" element={<Revolutions />} />

    <Route path="/content/:slug" element={<EventPage />} />
  </>
);