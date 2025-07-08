
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Karunamaya Agro Foods, No.341 & 342 Naganakal-Chellur Road, Vinayakanagar-Karatagi, Koppal Dist Karnataka 583229", "India"],
      link: "https://goo.gl/https://www.google.com/maps/place/Karunamaya+Agro+Foods/@15.6173176,76.6155666,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb78fa114939d23:0x7aa4e03e89553d50!8m2!3d15.6173125!4d76.6204375!16s%2Fg%2F11kblh0bq0?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D/xyz123" // Example link, replace with
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9900228099", "S Venkata Rao", "+91 9740198888", "A Rajesh"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@kmagro.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start trading? Contact us today for a personalized quote and discover how we can meet your rice sourcing needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

             {/* Google Maps with Karunamaya Agro Foods location */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-0">
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.5!2d76.6155666!3d15.6173176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb78fa114939d23:0x7aa4e03e89553d50!2sKarunamaya+Agro+Foods!5e0!3m2!1sen!2sin!4v1679123456789!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Karunamaya Agro Foods Location - Hospet, Karnataka, India"
                  />
                </div>
              </CardContent>
            </Card>
          
          </div>




          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
                <h2>Contact Us</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2rem;">
                    <div>
                        <h3>Get In Touch</h3>
                        <div class="contact-form">
                            <form id="contactForm">
                                <div class="form-group">
                                    <label for="inquiryType">Inquiry Type</label>
                                    <select id="inquiryType" name="inquiryType" required>
                                        <option value="">Select Inquiry Type</option>
                                        <option value="general">General Feedback</option>
                                        <option value="dealer">Dealer Inquiry</option>
                                        <option value="export">Export Inquiry</option>
                                        <option value="bulk">Bulk Order</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="name">Full Name</label>
                                    <input type="text" id="name" name="name" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="email">Email Address</label>
                                    <input type="email" id="email" name="email" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone">
                                </div>
                                
                                <div class="form-group">
                                    <label for="company">Company Name</label>
                                    <input type="text" id="company" name="company">
                                </div>
                                
                                <div class="form-group">
                                    <label for="product">Product Interest</label>
                                    <select id="product" name="product">
                                        <option value="">Select Product</option>
                                        <option value="sona-masoori">Sona Masoori Rice</option>
                                        <option value="rnr-lachkari">RNR Lachkari Woda Kollam Rice</option>
                                        <option value="sona-masoori-raw">Sona Masoori Raw Rice</option>
                                        <option value="all">All Products</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea id="message" name="message" rows="5" required></textarea>
                                </div>
                                
                                <button type="submit" class="submit-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
