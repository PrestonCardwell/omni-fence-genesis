import { Link } from "react-router-dom";
import { Phone, FileText } from "lucide-react";
import { BUSINESS } from "@/config/business";

/** Always-visible Call / Quote buttons at the bottom of the screen on phones. */
const MobileCallBar = () => (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-[150] grid grid-cols-2 shadow-[0_-2px_10px_rgba(0,0,0,0.15)]">
    <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center justify-center gap-2 bg-primary text-white py-4 text-lg font-semibold">
      <Phone className="h-5 w-5" /> Call Now
    </a>
    <Link to="/quote" className="flex items-center justify-center gap-2 bg-white text-primary py-4 text-lg font-semibold border-t border-primary/20">
      <FileText className="h-5 w-5" /> Free Quote
    </Link>
  </div>
);

export default MobileCallBar;
