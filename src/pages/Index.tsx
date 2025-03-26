
import { ArrowRight, Building, Users, Lightbulb, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className={cn(
              "md:col-span-6 z-10 opacity-0 transition-all duration-700 delay-100",
              isVisible && "opacity-100 translate-y-0"
            )}>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6">
                <span className="text-primary">Digital markedsføring</span> til byggebranchen
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-foreground/70 mb-6 md:mb-8 max-w-xl">
                Vi hjælper byggevirksomheder og håndværkere med at vinde flere kunder gennem skræddersyet digital markedsføring og synlighed online.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/contact">
                    Kontakt os <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/book-mode">Book et gratis møde</Link>
                </Button>
              </div>
            </div>
            <div className={cn(
              "md:col-span-6 z-10 opacity-0 transition-all duration-700 delay-300 mt-8 md:mt-0",
              isVisible && "opacity-100 translate-y-0"
            )}>
              <div className="relative">
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full filter blur-2xl"></div>
                <div className="glass-card p-4 md:p-6 lg:p-8 rounded-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Digital markedsføring til byggebranchen" 
                    className="w-full h-auto rounded-xl shadow-lg object-cover aspect-video"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Vores specialiserede ydelser
            </h2>
            <p className="text-foreground/70 text-base md:text-lg">
              Skræddersyede digitale løsninger der øger synlighed og tiltrækker flere kunder til din byggevirksomhed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Building className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
                title: "SEO til byggebranchen",
                description: "Få din virksomhed til tops i Google, når potentielle kunder søger efter jeres services."
              },
              {
                icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
                title: "SoMe håndtering",
                description: "Professionel administration af sociale medier der viser jeres projekter og ekspertise frem."
              },
              {
                icon: <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
                title: "Google Ads kampagner",
                description: "Målrettede annoncekampagner der giver leads og kunder i din målgruppe."
              },
              {
                icon: <BarChart className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
                title: "Konverteringsoptimering",
                description: "Forbedring af din hjemmeside for at omdanne besøgende til betalende kunder."
              }
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
              >
                <div className="mb-3 md:mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-foreground/70 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  Læs mere <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:max-w-2xl">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                Klar til at løfte din byggevirksomhed?
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-0">
                Lad os sammen skabe en digital strategi, der giver flere kunder og øget omsætning.
              </p>
            </div>
            <div>
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/contact">Kontakt os i dag</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Det siger vores kunder
            </h2>
            <p className="text-foreground/70 text-base md:text-lg">
              Se hvordan vi har hjulpet andre virksomheder i byggebranchen med at vækste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: "EngagePro har været en fantastisk samarbejdspartner. De forstår virkelig byggebranchen og har hjulpet os med at øge vores online synlighed betydeligt.",
                author: "Thomas Nielsen",
                company: "Nielsen Tømrer & Snedker"
              },
              {
                quote: "Efter bare 3 måneder med deres SEO-service begyndte vi at se en markant stigning i henvendelser fra Google. Kan varmt anbefales!",
                author: "Mette Jensen",
                company: "Jensen VVS"
              },
              {
                quote: "Vores sociale medier var ikke-eksisterende før vi hyrede EngagePro. Nu har vi en stærk tilstedeværelse, der faktisk genererer leads.",
                author: "Lars Petersen",
                company: "Petersen Entreprenør"
              }
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-slate-50 p-5 md:p-6 rounded-xl relative"
              >
                <div className="text-4xl md:text-5xl text-primary/20 absolute top-4 left-4">"</div>
                <p className="text-foreground/80 mb-6 relative z-10 pt-6 text-sm md:text-base">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-xs md:text-sm text-foreground/60">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
