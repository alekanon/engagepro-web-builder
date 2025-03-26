
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      
      toast({
        title: "Besked modtaget!",
        description: "Vi vender tilbage til dig hurtigst muligt.",
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Kontakt os
          </h1>
          <p className="text-base md:text-lg text-foreground/70">
            Vi står klar til at hjælpe din byggevirksomhed med at vokse online. Kontakt os i dag for en uforpligtende snak.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            {isSubmitted ? (
              <div className="bg-primary/5 p-6 md:p-8 rounded-xl text-center">
                <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto mb-4 md:mb-6" />
                <h2 className="font-display text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  Tak for din henvendelse!
                </h2>
                <p className="text-foreground/70 mb-6 text-sm md:text-base">
                  Vi har modtaget din besked og vender tilbage til dig hurtigst muligt, typisk inden for 24 timer på hverdage.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Send en ny besked
                </Button>
              </div>
            ) : (
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                <h2 className="font-display text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  Send os en besked
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Navn*</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Virksomhed*</Label>
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
                      <Label htmlFor="email">E-mail*</Label>
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
                      <Label htmlFor="phone">Telefon*</Label>
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
                    <Label htmlFor="message">Besked*</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="min-h-[120px] md:min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sender..." : "Send besked"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-xs text-center text-foreground/60">
                    Ved at indsende denne formular accepterer du, at vi kontakter dig vedrørende din henvendelse.
                  </p>
                </form>
              </div>
            )}
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="bg-primary/5 p-6 md:p-8 rounded-xl">
              <h2 className="font-display text-xl md:text-2xl font-bold mb-4 md:mb-6">
                Kontaktinformation
              </h2>
              
              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary mr-3 md:mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-base md:text-lg">Adresse</h4>
                    <p className="text-foreground/70 text-sm md:text-base">Hovedgaden 123, 2800 Kgs. Lyngby</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary mr-3 md:mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-base md:text-lg">Telefon</h4>
                    <p className="text-foreground/70 text-sm md:text-base">+45 12 34 56 78</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary mr-3 md:mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-base md:text-lg">E-mail</h4>
                    <p className="text-foreground/70 text-sm md:text-base">info@engagepro.dk</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary mr-3 md:mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-base md:text-lg">Åbningstider</h4>
                    <p className="text-foreground/70 text-sm md:text-base">Mandag-Fredag: 9:00 - 17:00</p>
                    <p className="text-foreground/70 text-sm md:text-base">Weekend: Lukket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
