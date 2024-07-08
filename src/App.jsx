import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Calendar, Users, Settings, Ticket } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Events from "./pages/Events.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import Attendees from "./pages/Attendees.jsx";
import SettingsPage from "./pages/Settings.jsx";
import BookTickets from "./pages/BookTickets.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Events",
    to: "/events",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Create Event",
    to: "/create-event",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Attendees",
    to: "/attendees",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    title: "Book Tickets",
    to: "/book-tickets",
    icon: <Ticket className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="events" element={<Events />} />
              <Route path="create-event" element={<CreateEvent />} />
              <Route path="attendees" element={<Attendees />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="book-tickets" element={<BookTickets />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;