import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, ArrowRight, MessageCircle } from "lucide-react";
import mountainsImage from "@/assets/destination-mountains.jpg";
import parisImage from "@/assets/destination-paris.jpg";
import japanImage from "@/assets/destination-japan.jpg";
import { sendDestinationToWhatsApp } from "@/utils/whatsapp";

const destinations = [
  {
    id: 1,
    name: "Swiss Alps",
    country: "Switzerland",
    image: mountainsImage,
    rating: 4.9,
    price: "$1,299",
    description: "Breathtaking mountain vistas and alpine adventures await in the heart of the Swiss Alps.",
    highlights: ["Mountain Hiking", "Cable Car Rides", "Alpine Villages"]
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    image: parisImage,
    rating: 4.8,
    price: "$899",
    description: "Experience the city of love with its iconic landmarks, world-class cuisine, and romantic atmosphere.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"]
  },
  {
    id: 3,
    name: "Kyoto",
    country: "Japan",
    image: japanImage,
    rating: 4.9,
    price: "$1,199",
    description: "Discover ancient temples, traditional gardens, and authentic Japanese culture in this historic city.",
    highlights: ["Cherry Blossoms", "Zen Temples", "Tea Ceremony"]
  }
];

const FeaturedDestinations = () => {
  return (
    <section id="destinations" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the world's most incredible destinations, handpicked for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden border-0 shadow-destination hover:shadow-card-hover transition-all duration-500 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{destination.country}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">{destination.name}</h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <div className="text-2xl font-bold text-primary">{destination.price}</div>
                  </div>
                  
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="group/btn"
                    onClick={() => sendDestinationToWhatsApp(destination)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Explore
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Destinations
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;