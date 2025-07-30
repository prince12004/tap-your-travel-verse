import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/e72a4958-6b55-4c3a-b083-bb635058869e.png" 
                alt="Tap Your Trip" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/80 leading-relaxed">
              Your trusted travel companion, making dream destinations accessible with 
              exceptional service and unbeatable value.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Travel Street, Adventure City, AC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-TRIP</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>hello@tapyourtrip.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-background/80 hover:text-primary transition-colors">Home</a>
              <a href="#destinations" className="block text-background/80 hover:text-primary transition-colors">Destinations</a>
              <a href="#packages" className="block text-background/80 hover:text-primary transition-colors">Travel Packages</a>
              <a href="#about" className="block text-background/80 hover:text-primary transition-colors">About Us</a>
              <a href="#contact" className="block text-background/80 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Flight Booking</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Hotel Reservations</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Travel Insurance</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Cruise Packages</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Travel Guides</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Help Center</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Customer Service</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Booking Help</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Travel Tips</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">Safety Guidelines</a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-background/80">
            © 2024 Tap Your Trip. All rights reserved.
          </div>

          {/* Social Media */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-background/80 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/80 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;