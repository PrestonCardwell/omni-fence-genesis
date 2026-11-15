import Hero from "@/components/Hero";
import ShortQuoteForm from "@/components/ShortQuoteForm";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import LocationCTA from "@/components/LocationCTA";

const Index = () => {

  return (
    <main className="overflow-hidden">
      <Hero />
      <section aria-label="Quick Quote Form" className="py-16 bg-gradient-to-b from-white via-secondary/30 to-white">
        <div className="container-custom">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Provide your information and we'll get in touch with you about your question or request.
            </p>
          </div>
          
          {/* Form */}
          <ShortQuoteForm />
        </div>
      </section>
      <section aria-label="Services Overview" className="relative py-16">
        <ServicesOverview />
        <div className="absolute top-1/2 left-0 w-20 h-[80%] bg-accent/5 -z-10 rounded-r-full"></div>
      </section>
      <section aria-label="Why Choose Us" className="py-16">
        <WhyChooseUs />
      </section>
      <section aria-label="Customer Testimonials" className="py-16">
        <Testimonials />
      </section>
      <section aria-label="Service Areas" className="py-16">
        <LocationCTA />
      </section>
    </main>
  );
};

export default Index;
