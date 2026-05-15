import { Route } from "react-router-dom";
import EventPage from "../pages/events/EventPage";

export const EventsRoutes = (
  <>
    <Route path="/events/:slug" element={<EventPage />} />
  </>
);