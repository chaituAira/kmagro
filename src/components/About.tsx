
import { CheckCircle, Users, TrendingUp, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const achievements = [
    "ISO 9001:2015 Certified",
    "HACCP Compliant Facilities",
    "Organic Certification",
    "Fair Trade Partnerships"
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                About Karunamaya Agro Foods
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For over three decades, we have been at the forefront of the global rice trade, 
                connecting premium rice producers with markets worldwide. Our commitment to quality, 
                reliability, and customer satisfaction has made us a trusted partner for businesses 
                across 25+ countries.
              </p>
              <p className="text-gray-600 mb-8">
                From our state-of-the-art warehouses to our experienced logistics team, 
                every aspect of our operation is designed to ensure you receive the finest 
                rice products on time, every time.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Our Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        
            <Card className="bg-gradient-to-br from-amber-400 to-amber-600 text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-amber-100">
                  To bridge the gap between premium rice producers and global markets, 
                  ensuring sustainable partnerships that benefit farmers, businesses, and consumers alike.<br/>
                 <b>Quality Assurance:</b> Ensuring that the rice meets international standards for quality and safety. This includes proper cultivation practices, harvesting, and processing.<br/>
                 <b>Market Access:</b> Facilitating access to global markets through trade agreements, export licenses, and partnerships with international distributors and retailers. 
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
    </section>
  );
};
