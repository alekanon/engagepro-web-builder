
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Calendar as CalendarIcon, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { da } from "date-fns/locale";

const BookMeeting = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if date is selected
    if (!date) {
      toast({
        title: "Vælg venligst en dato",
        description: "Du skal vælge en dato for mødet",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send this data to your backend
    console.log("Form submitted:", { ...formData, date });
    
    toast({
      title: "Møde booket!",
      description: "Vi har modtaget din anmodning og kontakter dig snarest.",
    });
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center">
            <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Tak for din booking!
            </h1>
            <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
              Vi har modtaget din anmodning om et gratis møde. En af vores konsulenter vil kontakte dig inden for 24 timer for at bekræfte tidspunktet.
            </p>
            <Button size="lg" asChild>
              <a href="/">Tilbage til forsiden</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Book et gratis møde
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              Tag det første skridt mod en stærkere digital tilstedeværelse. Book et uforpligtende møde, hvor vi diskuterer, hvordan vi kan hjælpe din byggevirksomhed med at vokse online.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-xl mb-8">
              <h3 className="font-bold text-xl mb-4">Hvad kan du forvente af mødet?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>En grundig analyse af din nuværende digitale tilstedeværelse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Konkrete forslag til forbedringer og nye tiltag</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Indsigt i hvordan dine konkurrenter klarer sig online</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Et uforpligtende tilbud på en skræddersyet løsning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-4">Mødet kan afholdes</h3>
              <p className="mb-4">Vi er fleksible med mødested efter dit ønske:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-primary mr-2" />
                  <span>Online via Teams eller Zoom</span>
                </li>
                <li className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-primary mr-2" />
                  <span>På vores kontor i København</span>
                </li>
                <li className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-primary mr-2" />
                  <span>På din virksomheds adresse</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h2 className="font-display text-2xl font-bold mb-6">
                Vælg dato og udfyld kontaktoplysninger
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="mb-2 block">Vælg dato for mødet</Label>
                  <div className="border rounded-md p-4">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      locale={da}
                      disabled={{ before: new Date() }}
                      className={cn("mx-auto")}
                    />
                  </div>
                  {date && (
                    <p className="mt-2 text-sm text-foreground/70">
                      Valgt dato: {format(date, "d. MMMM yyyy", { locale: da })}
                    </p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Navn</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Virksomhed</Label>
                    <Input 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Besked (valgfri)</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Fortæl os lidt om din virksomhed og hvad du gerne vil opnå..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Book dit gratis møde
                </Button>
                
                <p className="text-xs text-center text-foreground/60 mt-4">
                  Ved at indsende denne formular accepterer du, at vi kontakter dig vedrørende din bookingforespørgsel.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMeeting;
