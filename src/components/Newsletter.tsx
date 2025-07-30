import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, Plane } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive travel deals and updates in your inbox.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-8 flex justify-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <Mail className="h-12 w-12 text-primary animate-pulse-slow" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Never Miss a Deal
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about exclusive travel deals, 
              destination guides, and insider tips from around the world.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-white shadow-lg border-white/30"
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="h-12 px-6">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Plane className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Exclusive Deals</h3>
                <p className="text-sm text-muted-foreground">
                  Get access to subscriber-only discounts and early bird offers
                </p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Weekly Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Receive curated travel content and destination spotlights
                </p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Send className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Travel Tips</h3>
                <p className="text-sm text-muted-foreground">
                  Expert advice and insider secrets for better travels
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              Join 50,000+ travelers who trust us with their inbox. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;