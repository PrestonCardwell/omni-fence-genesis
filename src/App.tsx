import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCallBar";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import Quote from "./pages/Quote";
import Gallery from "./pages/Gallery";
import CityPage from "./pages/CityPage";
import NotFound from "./pages/NotFound";
import { usePageMeta } from "./hooks/usePageMeta";

/** Everything inside the router. Shared by the browser app and the build-time pre-renderer. */
export const AppShell = () => {
  usePageMeta();
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen pb-16 md:pb-0">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:slug" element={<CityPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/quote" element={<Quote />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <MobileCallBar />
      </div>
    </TooltipProvider>
  );
};

const App = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;
