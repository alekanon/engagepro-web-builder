
import { ArrowRight, Building, Users, Lightbulb, BarChart, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Digital markedsføring til byggebranchen
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              Vi tilbyder specialiserede digitale løsninger, der er skræddersyede til bygge- og håndværkerbranchen. Vores ekspertise hjælper dig med at stå ud fra mængden og tiltrække flere relevante kunder.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <Building className="h-10 w-10 text-primary mb-6" />
                <h2 className="font-display text-2xl font-bold mb-4">SEO til byggebranchen</h2>
                <p className="text-foreground/70 mb-6">
                  Vores søgemaskineoptimering er specialiseret til byggebranchen, med fokus på lokale søgeresultater og branchespecifikke søgeord.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Lokalt SEO for håndværkere og byggevirksomheder</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Brancherelevante søgeord og indholdsoptimering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Google My Business optimering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Månedlige rapporter og kontinuerlig optimering</span>
                  </li>
                </ul>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/contact">Kontakt os om SEO</Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <Users className="h-10 w-10 text-primary mb-6" />
                <h2 className="font-display text-2xl font-bold mb-4">SoMe håndtering</h2>
                <p className="text-foreground/70 mb-6">
                  Vi håndterer dine sociale medier med indhold, der viser dine projekter, testimonials og ekspertise inden for byggebranchen.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Contentplan og strategi til sociale medier</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Professionel foto- og videoproduktion af projekter</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Community management og kundeinteraktion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Målrettet annoncering på Facebook og Instagram</span>
                  </li>
                </ul>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/contact">Kontakt os om SoMe</Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <Lightbulb className="h-10 w-10 text-primary mb-6" />
                <h2 className="font-display text-2xl font-bold mb-4">Google Ads kampagner</h2>
                <p className="text-foreground/70 mb-6">
                  Målrettede annoncekampagner på Google, der genererer leads og potentielle kunder specifikt inden for byggebranchen.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Søgeordsanalyse og konkurrentanalyse</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Opsætning og optimering af kampagner</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>A/B-test af annoncer for bedste resultater</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Ugentlig optimering og månedlig rapportering</span>
                  </li>
                </ul>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/contact">Kontakt os om Google Ads</Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <BarChart className="h-10 w-10 text-primary mb-6" />
                <h2 className="font-display text-2xl font-bold mb-4">Konverteringsoptimering</h2>
                <p className="text-foreground/70 mb-6">
                  Vi hjælper din virksomhed med at omdanne besøgende til betalende kunder gennem optimeret webdesign og brugeroplevelse.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Brugervenlighedsanalyse og heatmap-tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Optimering af landingssider</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>A/B-test af call-to-actions og formularer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Optimering af leadgenerering</span>
                  </li>
                </ul>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/contact">Kontakt os om konverteringsoptimering</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Få et uforpligtende tilbud <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Klar til at forbedre din digitale tilstedeværelse?
              </h2>
              <p className="text-white/80 text-lg mb-0">
                Book et gratis, uforpligtende møde, hvor vi gennemgår din virksomheds digitale muligheder.
              </p>
            </div>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/book-mode">Book et gratis møde</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
