import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users, Search, Plane } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";
import { sendToWhatsApp } from "@/utils/whatsapp";

const Hero = () => {
  const [searchData, setSearchData] = useState({
    destination: "",
    departure: "",
    checkin: "",
    checkout: "",
    guests: "1"
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Travel Destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Floating Plane Icon */}
          <div className="mb-8 flex justify-center">
            <Plane className="h-16 w-16 text-white animate-float" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tap Your Next
            <span className="block text-primary">Adventure</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Discover extraordinary destinations and create unforgettable memories. 
            Your perfect trip is just a tap away.
          </p>

          {/* Search Form */}
          <div className="bg-glass backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-destination max-w-4xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Destination */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Where to?"
                  value={searchData.destination}
                  onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                  className="pl-10 h-12 bg-white/80 border-white/30"
                />
              </div>

              {/* Departure */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="date"
                  placeholder="Departure"
                  value={searchData.departure}
                  onChange={(e) => setSearchData({...searchData, departure: e.target.value})}
                  className="pl-10 h-12 bg-white/80 border-white/30"
                />
              </div>

              {/* Check-in */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="date"
                  placeholder="Check-in"
                  value={searchData.checkin}
                  onChange={(e) => setSearchData({...searchData, checkin: e.target.value})}
                  className="pl-10 h-12 bg-white/80 border-white/30"
                />
              </div>

              {/* Check-out */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="date"
                  placeholder="Check-out"
                  value={searchData.checkout}
                  onChange={(e) => setSearchData({...searchData, checkout: e.target.value})}
                  className="pl-10 h-12 bg-white/80 border-white/30"
                />
              </div>

              {/* Search Button */}
              <Button 
                variant="hero" 
                className="h-12"
                onClick={() => sendToWhatsApp(searchData)}
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button variant="glass" size="sm">
                <Plane className="h-4 w-4 mr-2" />
                Flights
              </Button>
              <Button variant="glass" size="sm">
                Hotels
              </Button>
              <Button variant="glass" size="sm">
                Packages
              </Button>
              <Button variant="glass" size="sm">
                Cruises
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce-subtle">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;