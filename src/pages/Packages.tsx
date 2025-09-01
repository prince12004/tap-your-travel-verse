import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Plane, Hotel, MapPin, MessageCircle } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "European Explorer",
    duration: "14 Days",
    price: "$2,999",
    originalPrice: "$3,499",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: ["Paris", "Rome", "Barcelona", "Amsterdam"],
    includes: ["Flights", "Hotels", "Breakfast", "Tours"],
    highlights: ["Skip-the-line tours", "Expert guides", "4-star hotels"],
    category: "Popular"
  },
  {
    id: 2,
    name: "Asian Adventure",
    duration: "12 Days",
    price: "$2,599",
    originalPrice: "$2,999",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: ["Tokyo", "Kyoto", "Bangkok", "Singapore"],
    includes: ["Flights", "Hotels", "Some Meals", "Transfers"],
    highlights: ["Cultural experiences", "Traditional cuisine", "Modern cities"],
    category: "Adventure"
  },
  {
    id: 3,
    name: "Tropical Paradise",
    duration: "10 Days",
    price: "$1,899",
    originalPrice: "$2,299",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: ["Bali", "Phuket", "Maldives"],
    includes: ["Flights", "Beach Resorts", "All Meals", "Water Sports"],
    highlights: ["Private beaches", "Spa treatments", "Sunset cruises"],
    category: "Luxury"
  }
];

const sendToWhatsApp = (packageData: any) => {
  const message = `Hi! I'm interested in the ${packageData.name} package.
  
Details:
- Duration: ${packageData.duration}
- Price: ${packageData.price}
- Destinations: ${packageData.destinations.join(", ")}
- Includes: ${packageData.includes.join(", ")}

Please provide more information and help me book this package.`;

  const whatsappUrl = `https://wa.me/918090214387?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

const Packages = () => {
  return (
    <div className="min-h-screen pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Travel Packages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our carefully crafted travel packages designed to give you 
              the best experiences at unbeatable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className="group overflow-hidden border-0 shadow-destination hover:shadow-card-hover transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {pkg.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                    <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                  </div>
                  {pkg.originalPrice && (
                    <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      Save ${parseInt(pkg.originalPrice.replace('$', '').replace(',', '')) - parseInt(pkg.price.replace('$', '').replace(',', ''))}
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{pkg.duration}</span>
                    <Users className="h-4 w-4 ml-4 mr-2" />
                    <span className="text-sm">Small Groups</span>
                  </div>

                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{pkg.destinations.join(" → ")}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Includes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.includes.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Highlights:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {pkg.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through mr-2">
                          {pkg.originalPrice}
                        </span>
                      )}
                      <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                    
                    <Button 
                      variant="default" 
                      size="sm" 
                      onClick={() => sendToWhatsApp(pkg)}
                      className="group/btn"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Packages
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Packages;