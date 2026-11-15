import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Fence, Shield, Hammer, KeyRound, CheckCircle, Award, Clock, Star, Brush } from "lucide-react";
import { BUSINESS } from '@/config/business';

const cardDelayClasses = ["delay-300", "delay-400", "delay-500", "delay-600"];

const Services = () => {

  // Service-specific project images
  const residentialImages = ["/Privacy/Attachment(104).jpg", "/Privacy/20230509_173703.jpg", "/Privacy/Attachment(102).jpg", "/Privacy/IMG_20230802_110624722(1).jpg", "/Ameristar/491509820_1083822503763835_8302664543931386057_n.jpg", "/Ameristar/1000002894(1).jpg", "/Round%20Rail/Attachment(95).jpg"];
  const commercialImages = ["/Commercial/488519825_1077025151110237_580836037559699280_n.jpg", "/Commercial/488544588_1077025094443576_7595472113235010536_n.jpg", "/Commercial/488962114_1077025047776914_537378424244966229_n.jpg", "/Commercial/Attachment(137).jpg"];
  const customDeckImages = ["/Hero_Image_3.jpg", "/Hero_Image_4.jpg", "/Hero_Image_5.jpg", "/Hero_Image_6.jpg"];
  const gatesImages = ["/Gates-and-Gate-Operators/488675040_1077025164443569_4432792265416510015_n.jpg", "/Gates-and-Gate-Operators/488706680_1077025161110236_3664048956504830031_n.jpg", "/Gates-and-Gate-Operators/488867158_1077025147776904_1813597507789668214_n.jpg", "/Gates-and-Gate-Operators/Attachment(81).jpg"];
  const preStainedImages = ["/Privacy/Resized_20220717_202221.jpeg", "/Hero_Image_8.jpeg", "/Pre-Stained/IMG_5981.jpg"];
  const services = [{
    id: "residential-fencing",
    title: "Residential Fencing",
    icon: <Fence className="h-8 w-8" />,
    description: "Transform your home with custom-designed residential fences that perfectly blend security, privacy, and curb appeal. From classic wooden privacy fences to modern vinyl and aluminum options, we create solutions that enhance your property value while reflecting your personal style.",
    features: ["Privacy & Security", "Custom Designs", "Premium Materials", "Professional Installation"],
    gallery: residentialImages
  }, {
    id: "commercial-fencing",
    title: "Commercial Fencing",
    icon: <Shield className="h-8 w-8" />,
    description: "Protect your business with industrial-grade fencing solutions designed for durability and security. We specialize in chain-link, steel, and high-security fencing systems that meet commercial standards while maintaining professional aesthetics for your property.",
    features: ["High Security", "Industrial Grade", "Code Compliance", "Rapid Installation"],
    gallery: commercialImages
  }, {
    id: "custom-decks",
    title: "Custom Decks",
    icon: <Hammer className="h-8 w-8" />,
    description: "Extend your living space with beautifully crafted custom decks that become the heart of your outdoor entertainment. Our expert craftsmen use premium materials and innovative designs to create decks that are both functional and stunning focal points for your home.",
    features: ["Custom Design", "Premium Materials", "Multi-Level Options", "Built to Last"],
    gallery: customDeckImages
  }, {
    id: "gates-operators",
    title: "Gates & Gate Operators",
    icon: <KeyRound className="h-8 w-8" />,
    description: "Experience the perfect combination of security and convenience with our automated gate systems. From elegant residential entry gates to heavy-duty commercial access controls, we provide complete gate solutions including installation, automation, and ongoing maintenance.",
    features: ["Automated Systems", "Remote Access", "Security Integration", "Professional Installation"],
    gallery: gatesImages
  }];
  const preStainedService = {
    id: "pre-stained-fencing",
    title: "Pre-Stained Fencing",
    icon: <Brush className="h-8 w-8" />,
    description: "Expedite the installation process with pre-stained wood materials. Fencing is pre-stained and curb-appeal-ready with one-time installation and protection against the elements from day one. The factory pre-stain option applies a professional grade stain to the front, back, edges, and ends of each board before the fence is installed, ensuring full stain coverage as opposed to staining after the wood is hung.",
    features: ["Professional Grade", "Virtually Weatherproof", "Fade Resistant", "Maximum UV Protection", "Prevents Water Damage", "Fungus and Mildew-Resistant", "Extends The Life Of Your Wood", "Beautifies And Protects"],
    gallery: preStainedImages
  };
  const trustBadges = [{
    icon: <Award className="h-5 w-5" />,
    text: "Licensed & Insured"
  }, {
    icon: <Clock className="h-5 w-5" />,
    text: "10+ Years Experience"
  }, {
    icon: <CheckCircle className="h-5 w-5" />,
    text: "Quality Guarantee"
  }, {
    icon: <Star className="h-5 w-5" />,
    text: "5-Star Reviews"
  }];
  return <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-32">
        {/* Background Image - Using img tag for better quality control */}
        <div className="absolute inset-0 z-0">
          <img src="/Privacy/Resized_20220717_202221.jpeg" alt="Professional fencing services in Tulsa, Oklahoma" width={1920} height={1080} className="w-full h-full object-cover" />
          {/* Overlay for text contrast - ensures WCAG AA compliance */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container-custom relative z-20">
          <div className="max-w-4xl mx-auto text-center slide-up delay-100">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Expert Fencing & Deck Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              From custom designs to professional installation, we deliver quality craftsmanship 
              that transforms your outdoor spaces.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {trustBadges.map((badge, index) => <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  {badge.icon}
                  <span className="ml-2">{badge.text}</span>
                </Badge>)}
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up delay-200">
            
            <h2 className="section-title">Our Premium Services</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Comprehensive fencing and deck solutions tailored to your specific needs, 
              backed by years of expertise and commitment to excellence.
            </p>
          </div>

          {/* Main Services Grid - 2x2 Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => <Card key={service.id} id={service.id} className={`scroll-mt-24 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary hover:border-primary/70 flex flex-col slide-up ${cardDelayClasses[index]}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-heading text-primary">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="flex flex-col h-full">
                  <div className="flex-grow space-y-6">
                    <CardDescription className="text-base leading-relaxed text-gray-700">
                      {service.description}
                    </CardDescription>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>)}
                    </div>

                    {/* Project Gallery Carousel */}
                    <div className="relative">
                      <h4 className="font-semibold mb-3 text-primary">Recent Projects</h4>
                      <Carousel className="w-full">
                        <CarouselContent>
                          {service.gallery.map((image, imageIndex) => <CarouselItem key={imageIndex} className="basis-1/2">
                              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                                <img src={image} alt={`${service.title} project ${imageIndex + 1}`} width={400} height={300} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </CarouselItem>)}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    </div>
                  </div>

                  {/* CTA Section - Fixed at bottom */}
                  <div className="pt-4 mt-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1 btn-primary">
                        <Link to="/quote" state={{
                      service: service.id
                    }}>
                          Get Free Estimate
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link to="/gallery">
                          See Gallery
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Pre-Stained Fencing - Full Width Card */}
          <div className="mb-16">
            <Card id={preStainedService.id} className="scroll-mt-24 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary hover:border-primary/70 slide-up delay-700">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {preStainedService.icon}
                  </div>
                  <CardTitle className="text-2xl font-heading text-primary">
                    {preStainedService.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column - Description and Features */}
                  <div className="space-y-6">
                    <CardDescription className="text-base leading-relaxed text-gray-700">
                      {preStainedService.description}
                    </CardDescription>

                    {/* Features List - 2 columns for better layout */}
                    <div className="grid grid-cols-2 gap-2">
                      {preStainedService.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>)}
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button asChild className="flex-1 btn-primary">
                        <Link to="/quote" state={{
                        service: preStainedService.id
                      }}>
                          Get Free Estimate
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link to="/gallery">
                          See Gallery
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Right Column - Project Gallery */}
                  <div className="relative">
                    <h4 className="font-semibold mb-3 text-primary">Recent Projects</h4>
                    <Carousel className="w-full">
                      <CarouselContent>
                        {preStainedService.gallery.map((image, imageIndex) => <CarouselItem key={imageIndex} className="basis-1/2">
                            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                              <img src={image} alt={`${preStainedService.title} project ${imageIndex + 1}`} width={400} height={300} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </CarouselItem>)}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Pull-Quote */}
          <div className="bg-primary/5 rounded-lg p-8 text-center slide-up delay-800">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
            </div>
            <blockquote className="text-xl font-medium text-gray-800 mb-4">
              "I wouldn't hesitate to recommend Omni Fence to a friend or relative. Everything on the proposal was just as the job was completed. The installer kept the area clean and the fences look great. These guys have pride in their work."
            </blockquote>
            <cite className="text-primary font-semibold">- Scott Burch, Satisfied Customer</cite>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
export default Services;