import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const Destinations = () => {
  return (
    <div className="min-h-screen pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Discover Amazing Destinations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore the world's most incredible places, from bustling cities to serene landscapes. 
              Find your perfect getaway destination.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search destinations..."
                    className="pl-10 h-12"
                  />
                </div>
                <Button variant="default" size="lg">
                  <Filter className="h-5 w-5 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="default">All Destinations</Button>
            <Button variant="outline">Beaches</Button>
            <Button variant="outline">Mountains</Button>
            <Button variant="outline">Cities</Button>
            <Button variant="outline">Adventure</Button>
            <Button variant="outline">Cultural</Button>
            <Button variant="outline">Luxury</Button>
          </div>
        </div>
      </section>

      <FeaturedDestinations />
      
      <Footer />
    </div>
  );
};

export default Destinations;