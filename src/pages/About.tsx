import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Users, Star, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Tap Your Trip
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TapYourTrip is a trusted travel agency in India, dedicated to creating custom travel experiences for every type of traveler.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Us
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're planning a relaxing beach vacation, an adventurous backpacking trip, or a luxurious international holiday package, we offer fully personalized travel planning to match your style, budget, and timeline. As a modern online travel booking platform, we specialize in a wide range of services including flight bookings, hotel reservations, honeymoon packages, domestic tours, group travel, and adventure tourism.
              </p>
              <p className="text-lg text-muted-foreground">
                With a focus on quality and convenience, TapYourTrip makes travel simple, affordable, and unforgettable. We believe travel is not just about the destination—it's about the experience, and we're here to make yours extraordinary.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">50K+</h3>
                  <p className="text-muted-foreground">Happy Travelers</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Plane className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">200+</h3>
                  <p className="text-muted-foreground">Destinations</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">4.9/5</h3>
                  <p className="text-muted-foreground">Customer Rating</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">15+</h3>
                  <p className="text-muted-foreground">Awards Won</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Us</h3>
                <p className="text-lg text-muted-foreground">
                  At TapYourTrip, we go beyond basic itineraries. We are passionate about delivering tailor-made holidays with the perfect balance of comfort, excitement, and value. Our experienced travel consultants work closely with you to design the ideal vacation package, whether it's a quick weekend getaway, a luxury honeymoon, or a customized international tour. We partner with top-rated airlines, hotels, and local guides to provide premium services at competitive rates.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  Our mission at TapYourTrip is to redefine how people experience travel by providing value-packed, technology-driven, and personalized travel solutions. We aim to make planning your next adventure effortless and enjoyable, whether it's a domestic vacation or a global exploration. By focusing on customer satisfaction, smart travel planning, and continuous innovation, we strive to become the most reliable travel agency for Indian travelers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;