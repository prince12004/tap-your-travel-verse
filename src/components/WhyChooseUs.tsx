import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Globe, Heart, Award, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Your safety is our priority. All bookings are protected with advanced security measures."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you wherever you are in the world."
  },
  {
    icon: Globe,
    title: "Global Destinations",
    description: "Access to over 10,000 destinations worldwide with local expertise and insights."
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Tailored recommendations based on your preferences and travel style."
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "We guarantee the best prices or we'll match any competitor's offer."
  },
  {
    icon: Users,
    title: "Expert Travel Agents",
    description: "Our experienced travel consultants help you plan the perfect getaway."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Tap Your Trip?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to making your travel dreams come true with exceptional service and unbeatable value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group border-0 shadow-lg hover:shadow-card-hover transition-all duration-500 transform hover:scale-105 animate-fade-in bg-gradient-to-br from-white to-secondary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Happy Travelers</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Destinations</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;