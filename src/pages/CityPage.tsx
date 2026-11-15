import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Fence, Shield, KeyRound, Brush, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import ShortQuoteForm from "@/components/ShortQuoteForm";
import Testimonials from "@/components/Testimonials";
import NotFound from "@/pages/NotFound";
import { BUSINESS } from "@/config/business";
import { CITIES, getCity } from "@/data/cities";

const SERVICES = [
  { icon: Fence, title: "Wood Privacy Fences", text: "6' and 8' cedar privacy fences, board-on-board and side-by-side, built on set posts that stay straight." },
  { icon: Brush, title: "Pre-Stained Fencing", text: "Fences stained before install for even color and longer life — no waiting a season to stain." },
  { icon: Shield, title: "Ornamental Iron & Chain Link", text: "Ameristar ornamental steel for pools and front yards, and chain link for dogs, back lots and commercial sites." },
  { icon: KeyRound, title: "Gates & Repairs", text: "Walk gates, double drive gates, gate operators, and repair or replacement of leaning or storm-damaged sections." },
];

const CityPage = () => {
  const { slug } = useParams();
  const city = getCity(slug);
  if (!city) return <NotFound />;

  const faqs = [
    {
      q: `How much does a new fence cost in ${city.city}?`,
      a: "It depends on the length, height, material and how many gates you need. We come out, measure, and give you a written quote with every item spelled out — no guessing. Call or request a quote online to get started.",
    },
    {
      q: `Do I need a permit or HOA approval for a fence in ${city.city}?`,
      a: `Rules vary by city and neighborhood. Many ${city.city} subdivisions have HOA guidelines on height, style and color. We'll go over the rules for your address before we build so there are no surprises.`,
    },
    {
      q: "Can you replace just part of my fence?",
      a: "Yes. We repair and replace storm-damaged or leaning sections, and we'll tell you honestly when a repair makes sense and when it's time for a full replacement.",
    },
    {
      q: `Are you licensed and insured to work in ${city.city}?`,
      a: "Yes. Omni Fence is a locally owned, licensed and insured fence contractor based in the Tulsa area.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const otherCities = CITIES.filter((c) => c.core && c.slug !== city.slug);

  return (
    <main className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-primary py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <img src="/Hero_Image_1.jpg" alt={`Fence installed by Omni Fence near ${city.city}, Oklahoma`} width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Fence Company in {city.city}, OK
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">{city.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5" /> Call {BUSINESS.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-white text-primary hover:bg-white/90">
                <Link to="/quote" className="inline-flex items-center">
                  Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">Your Local {city.city} Fence Contractor</h2>
            {city.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed mb-5 text-gray-700">{p}</p>
            ))}
            <ul className="grid sm:grid-cols-2 gap-3 mt-8">
              {["Free written quotes", "Licensed & insured", "Locally owned since 2020", "Residential & commercial"].map((t) => (
                <li key={t} className="flex items-center text-gray-800 font-medium">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center mb-10">Fence Services in {city.city}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {SERVICES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="text-primary font-semibold hover:underline">See photos of our work →</Link>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="section-title">Areas We Cover Around {city.city}</h2>
          <p className="text-lg text-gray-700 mb-6">
            We serve all of {city.city} and {city.county}, including {city.nearby.join(", ")}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map((c) => (
              <Link key={c.slug} to={`/locations/${c.slug}`} className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors">
                <MapPin className="h-4 w-4 mr-1" /> {c.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Customer Testimonials" className="py-8">
        <Testimonials />
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-8">{city.city} Fence FAQs</h2>
          {faqs.map((f) => (
            <div key={f.q} className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <h3 className="text-lg font-heading font-semibold mb-2">{f.q}</h3>
              <p className="text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="section-title">Get a Free Quote in {city.city}</h2>
            <p className="text-lg text-gray-600">
              Fill out the form or call <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary font-semibold">{BUSINESS.phone}</a>.
            </p>
          </div>
          <ShortQuoteForm />
        </div>
      </section>
    </main>
  );
};

export default CityPage;
