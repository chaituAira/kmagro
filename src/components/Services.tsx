
import { Truck, Shield, Globe, Clock, Award, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Export",
      description: "Worldwide shipping with complete documentation and customs handling"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality testing and certification for all our rice products"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistics Support",
      description: "End-to-end logistics management from warehouse to your doorstep"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "Guaranteed on-time delivery with real-time tracking and updates"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Sourcing",
      description: "Direct partnerships with certified farmers ensuring premium quality"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your trading needs"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive rice trading solutions backed by decades of expertise and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
