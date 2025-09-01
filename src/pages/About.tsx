import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Users, Star, Award } from "lucide-react";
import heroImage from "@/assets/best-travel-background-04ml2h9wywaoo6ei.webp"; 

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <Header />

      <section
        className="py-20 bg-primary/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Tap Your Trip
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TapYourTrip is a trusted travel agency in India, dedicated to
              creating custom travel experiences for every type of traveler.
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
                At TapYourTrip, we go beyond basic itineraries. We are
                passionate about delivering tailor-made holidays with the
                perfect balance of comfort, excitement, and value. Our
                experienced travel consultants work closely with you to design
                the ideal vacation package, whether it’s a quick weekend
                getaway, a luxury honeymoon, or a customized international tour.
                We partner with top-rated airlines, hotels, and local guides to
                provide premium services at competitive rates.
              </p>
              <p className="text-lg text-muted-foreground">
                From budget travel packages to exclusive luxury experiences, our
                goal is to help you travel smart and stress-free. With 24/7
                support, flexible plans, and secure online bookings, you’ll see
                why travelers across India trust TapYourTrip for their journeys
                near and far.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    50K+
                  </h3>
                  <p className="text-muted-foreground">Happy Travelers</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Plane className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    200+
                  </h3>
                  <p className="text-muted-foreground">Destinations</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    4.9/5
                  </h3>
                  <p className="text-muted-foreground">Customer Rating</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    15+
                  </h3>
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
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Why Choose Us
                </h3>
                <p className="text-lg text-muted-foreground">
                  At TapYourTrip, we go beyond basic itineraries. We are
                  passionate about delivering tailor-made holidays with the
                  perfect balance of comfort, excitement, and value. Our
                  experienced travel consultants work closely with you to design
                  the ideal vacation package, whether it’s a quick weekend
                  getaway, a luxury honeymoon, or a customized international
                  tour. We partner with top-rated airlines, hotels, and local
                  guides to provide premium services at competitive rates. From
                  budget travel packages to exclusive luxury experiences, our
                  goal is to help you travel smart and stress-free. With 24/7
                  support, flexible plans, and secure online bookings, you’ll
                  see why travelers across India trust TapYourTrip for their
                  journeys near and far.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-muted-foreground">
                  Our mission at TapYourTrip is to redefine how people
                  experience travel by providing value-packed,
                  technology-driven, and personalized travel solutions. We aim
                  to make planning your next adventure effortless and enjoyable,
                  whether it’s a domestic vacation or a global exploration. By
                  focusing on customer satisfaction, smart travel planning, and
                  continuous innovation, we strive to become the most reliable
                  travel agency for Indian travelers. At the heart of what we do
                  is a belief that travel should be easy, inspiring, and
                  accessible for everyone—and we’re here to help you make every
                  trip count.
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
