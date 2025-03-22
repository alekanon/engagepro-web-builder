
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "Hansen & Søn Tømrer",
    description: "Komplet digital transformation med ny hjemmeside, SEO og Google Ads kampagner.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    results: [
      "150% stigning i organisk trafik på 6 måneder",
      "23% stigning i konverteringsrate",
      "38 nye kundehenvendelser pr. måned fra Google Ads"
    ]
  },
  {
    id: 2,
    title: "Pedersen VVS",
    description: "SoMe strategi og håndtering af sociale medier med fokus på kundetestimonials og projektvisning.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    results: [
      "300% stigning i følgere på Instagram",
      "15-20 månedlige leads direkte fra sociale medier",
      "Forbedret brandidentitet og kundeloyalitet"
    ]
  },
  {
    id: 3,
    title: "Jensen Entreprenør",
    description: "Omfattende SEO-indsats kombineret med Google My Business optimering for lokal synlighed.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    results: [
      "Top 3 placeringer på 15 nøglesøgeord",
      "42% flere telefonopkald via Google My Business",
      "28% stigning i anmodninger om tilbud"
    ]
  },
  {
    id: 4,
    title: "Nielsen Murer",
    description: "Facebook Ads kampagner målrettet lokale boligejere med behov for renovering.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    results: [
      "8.5x ROI på annonceinvestering",
      "45 kvalificerede leads per måned",
      "Omkostning per lead reduceret med 32%"
    ]
  },
  {
    id: 5,
    title: "Mortensen Tag",
    description: "Konverteringsoptimering af hjemmeside med fokus på leadgenerering og kaldstilhandling.",
    image: "https://images.unsplash.com/photo-1632923057155-39df99c4c032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    results: [
      "173% stigning i konverteringsrate",
      "Reduceret bounce rate fra 65% til 32%",
      "Gennemsnitlig tid på siden øget med 85%"
    ]
  },
  {
    id: 6,
    title: "Andersen Malerfirma",
    description: "Komplet digital pakke med ny hjemmeside, SEO, Google Ads og sociale medier.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    results: [
      "324% stigning i organisk trafik",
      "270% flere henvendelser online",
      "Omsætning øget med 42% på et år"
    ]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Vores succeser
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              Se hvordan vi har hjulpet andre virksomheder i byggebranchen med at opnå markante resultater gennem digital markedsføring.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy) => (
              <div 
                key={caseStudy.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="relative h-64">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-4">{caseStudy.title}</h3>
                  <p className="text-foreground/70 mb-6">{caseStudy.description}</p>
                  
                  <h4 className="font-bold text-lg mb-3">Resultater:</h4>
                  <ul className="space-y-2 mb-6">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button size="sm" variant="outline" className="w-full">
                    Læs den fulde case
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Det siger vores kunder
            </h2>
            <p className="text-foreground/70 text-lg">
              Vi lader resultaterne tale for sig selv, og vores kunder bekræfter vores tilgang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "EngagePro har formået at øge vores online synlighed markant. Vores telefon ringer konstant med nye kundehenvendelser.",
                author: "Morten Hansen",
                company: "Hansen & Søn Tømrer"
              },
              {
                quote: "Professionelt team der virkelig forstår byggebranchen. De har skabt en strategi der passer perfekt til vores virksomhed.",
                author: "Lars Pedersen",
                company: "Pedersen VVS"
              },
              {
                quote: "Vores investering i digital markedsføring med EngagePro har givet et afkast, der langt overstiger vores forventninger.",
                author: "Anders Jensen",
                company: "Jensen Entreprenør"
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-xl relative"
              >
                <div className="text-5xl text-primary/20 absolute top-4 left-4">"</div>
                <p className="text-foreground/80 mb-6 relative z-10 pt-6">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Klar til at blive vores næste succes?
              </h2>
              <p className="text-white/80 text-lg mb-0">
                Lad os tale om, hvordan vi kan hjælpe din virksomhed med at opnå lignende resultater.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/contact">Kontakt os i dag</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/book-mode">Book et gratis møde</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
