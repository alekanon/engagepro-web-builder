
import { CheckCircle, Users, Trophy, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Om <span className="text-primary">EngagePro</span>
              </h1>
              <p className="text-lg text-foreground/70 mb-6">
                Vi er et dedikeret team af digitale specialister med en passion for at hjælpe bygge- og håndværkervirksomheder med at vokse online.
              </p>
              <p className="text-lg text-foreground/70 mb-8">
                Vores mission er at levere skræddersyede digitale løsninger, der giver konkrete resultater for vores kunder i byggebranchen.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Kontakt os</Link>
              </Button>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="EngagePro team" 
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Vores værdier
            </h2>
            <p className="text-foreground/70 text-lg">
              Disse kerneværdier guider alt vores arbejde og samarbejde med kunder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm h-full">
              <Trophy className="h-12 w-12 text-primary mb-6" />
              <h3 className="font-display text-xl font-bold mb-4">Resultatfokus</h3>
              <p className="text-foreground/70">
                Vi måler vores succes på de konkrete resultater, vi skaber for vores kunder. Vi fokuserer på at levere målbar ROI gennem alle vores ydelser.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm h-full">
              <Users className="h-12 w-12 text-primary mb-6" />
              <h3 className="font-display text-xl font-bold mb-4">Samarbejde</h3>
              <p className="text-foreground/70">
                Vi tror på tæt samarbejde med vores kunder for at forstå deres behov og målsætninger fuldt ud. Kun gennem tæt dialog kan vi skabe optimale løsninger.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm h-full">
              <Heart className="h-12 w-12 text-primary mb-6" />
              <h3 className="font-display text-xl font-bold mb-4">Passion</h3>
              <p className="text-foreground/70">
                Vi er passionerede omkring digital markedsføring og byggebranchen. Denne passion driver os til at levere arbejde af højeste kvalitet og følge med i de nyeste trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Hvorfor vælge os
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Med vores specialiserede fokus på byggebranchen har vi en dyb forståelse for de udfordringer og muligheder, der er specifikke for netop din branche.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Branchespecifik ekspertise</h4>
                    <p className="text-foreground/70">Vi forstår byggebranchen og de digitale løsninger, der virker specifikt for denne sektor.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Dokumenterede resultater</h4>
                    <p className="text-foreground/70">Vi har hjulpet talrige byggevirksomheder med at øge deres online synlighed og kundebase.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Skræddersyede løsninger</h4>
                    <p className="text-foreground/70">Vi tror ikke på one-size-fits-all. Alle vores løsninger er tilpasset netop din virksomheds behov.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Transparent kommunikation</h4>
                    <p className="text-foreground/70">Vi leverer regelmæssige rapporter og har en åben kommunikation om alle aspekter af vores samarbejde.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team working together" 
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Vil du vide mere om, hvordan vi kan hjælpe dig?
              </h2>
              <p className="text-white/80 text-lg mb-0">
                Kontakt os i dag for en uforpligtende snak om dine muligheder.
              </p>
            </div>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">Kontakt os</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
