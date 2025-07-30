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
              We're passionate about making travel accessible, memorable, and extraordinary. 
              Founded with a vision to connect travelers with their dream destinations.
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
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tap Your Trip was born from a simple belief: every journey should be extraordinary. 
                Our team of travel enthusiasts and technology experts came together to revolutionize 
                how people discover, plan, and book their perfect trips.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to serve thousands of travelers worldwide, helping them create 
                memories that last a lifetime through carefully curated experiences and personalized service.
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To democratize travel by making extraordinary experiences accessible to everyone, 
                  while fostering cultural understanding and creating lasting memories through seamless, 
                  personalized journey planning.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To become the world's most trusted travel companion, connecting people with 
                  transformative experiences that broaden perspectives, create connections, 
                  and inspire a deeper appreciation for our diverse world.
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