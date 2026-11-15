import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, CheckCircle, Star } from "lucide-react";
import ShortQuoteForm from "@/components/ShortQuoteForm";
import { BUSINESS } from '@/config/business';
const Locations = () => {

  // Primary service locations - most work happens within 50-100 miles of Tulsa
  const locations = [{
    id: "tulsa-ok",
    city: "Tulsa",
    state: "OK",
    isHeadquarters: true,
    description: "Our headquarters and primary service area. Full service coverage with same-day estimates available."
  }, {
    id: "bartlesville-ok",
    city: "Bartlesville",
    state: "OK",
    isHeadquarters: false,
    description: "Professional fencing and deck services with scheduled appointments and full installation."
  }, {
    id: "bixby-ok",
    city: "Bixby",
    state: "OK",
    isHeadquarters: false,
    description: "Complete fencing solutions with quality craftsmanship and reliable service."
  }, {
    id: "broken-arrow-ok",
    city: "Broken Arrow",
    state: "OK",
    isHeadquarters: false,
    description: "Full-service fencing and deck installation with professional consultation."
  }, {
    id: "claremore-ok",
    city: "Claremore",
    state: "OK",
    isHeadquarters: false,
    description: "Quality fencing services with comprehensive project support and installation."
  }, {
    id: "jenks-ok",
    city: "Jenks",
    state: "OK",
    isHeadquarters: false,
    description: "Professional installation services with project planning and material delivery."
  }, {
    id: "muskogee-ok",
    city: "Muskogee",
    state: "OK",
    isHeadquarters: false,
    description: "Extended service area with professional fencing and deck solutions."
  }, {
    id: "owasso-ok",
    city: "Owasso",
    state: "OK",
    isHeadquarters: false,
    description: "Comprehensive fencing services with professional consultation and installation."
  }, {
    id: "ponca-city-ok",
    city: "Ponca City",
    state: "OK",
    isHeadquarters: false,
    description: "Quality fencing and deck services with reliable installation and support."
  }, {
    id: "sand-springs-ok",
    city: "Sand Springs",
    state: "OK",
    isHeadquarters: false,
    description: "Professional fencing solutions with comprehensive service and installation."
  }, {
    id: "sapulpa-ok",
    city: "Sapulpa",
    state: "OK",
    isHeadquarters: false,
    description: "Full-service fencing and deck installation with quality craftsmanship."
  }, {
    id: "shawnee-ok",
    city: "Shawnee",
    state: "OK",
    isHeadquarters: false,
    description: "Extended service coverage with professional installation and customer support."
  }, {
    id: "stillwater-ok",
    city: "Stillwater",
    state: "OK",
    isHeadquarters: false,
    description: "Quality fencing services with scheduled appointments and professional installation."
  }, {
    id: "tahlequah-ok",
    city: "Tahlequah",
    state: "OK",
    isHeadquarters: false,
    description: "Professional fencing and deck services with comprehensive project support."
  }];
  const serviceHighlights = [{
    icon: <CheckCircle className="h-5 w-5" />,
    text: "Licensed & Insured"
  }, {
    icon: <Clock className="h-5 w-5" />,
    text: "Free Estimates"
  }, {
    icon: <Star className="h-5 w-5" />,
    text: "Quality Guarantee"
  }, {
    icon: <Phone className="h-5 w-5" />,
    text: "Local Support"
  }];
  return <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-28">
        {/* Background Image - Using img tag for better quality control */}
        <div className="absolute inset-0 z-0">
          <img src="/Hero_Image_8.jpeg" alt="Professional fencing services in Tulsa, Oklahoma" width={1920} height={1080} className="w-full h-full object-cover" />
          {/* Overlay for text contrast - ensures WCAG AA compliance */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container-custom relative z-20">
          <div className="max-w-4xl mx-auto text-center slide-up delay-100">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Serving Tulsa & Surrounding Areas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Professional fencing and deck services throughout the Greater Tulsa metropolitan area. 
              Quality craftsmanship delivered right to your door.
            </p>

            {/* Service Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {serviceHighlights.map((highlight, index) => <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  {highlight.icon}
                  <span className="ml-2">{highlight.text}</span>
                </Badge>)}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up delay-200">
            
            <h2 className="section-title">Our Service Locations</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">Professional fencing and deck installation services throughout the Greater Tulsa metropolitan area and surrounding communities.

We also serve communities and rural areas within our service radius not listed below. Contact us to confirm service availability in your location.</p>
          </div>

          {/* Service Locations - Clean List Style */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
                {locations.map((location) => <div key={location.id} className="flex items-center slide-up delay-300">
                    <MapPin className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <Link to={`/locations/${location.id}`} className={`font-medium hover:text-primary hover:underline ${location.isHeadquarters ? 'text-primary font-semibold' : 'text-gray-700'}`}>
                      {location.city}
                      {location.isHeadquarters && <Badge className="ml-2 bg-primary text-white text-xs px-2 py-0.5">
                          HQ
                        </Badge>}
                    </Link>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Additional Coverage Note */}
          <div className="bg-white/80 rounded-lg p-6 text-center mb-8 slide-up delay-800">
            
          </div>

          {/* Contact Section for Unlisted Areas */}
          <div className="text-center slide-up delay-900">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Don't See Your Area Listed?
            </h2>
            <p className="text-lg text-gray-600 mb-2 max-w-3xl mx-auto">We're always expanding our service areas! Contact us to see if we can serve your location.</p>
          </div>
          
          {/* Contact Form */}
          <div className="max-w-4xl mx-auto mt-6">
            <ShortQuoteForm />
          </div>
        </div>
      </section>

      {/* Final CTA Section - Matching Services and Gallery pages */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Get a free consultation and personalized quote for your fencing or deck project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover:bg-primary/10 hover:text-primary hover:border-primary/30">
              <a href={`tel:${BUSINESS.phoneRaw}`}>Call {BUSINESS.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </main>;
};
export default Locations;