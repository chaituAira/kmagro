import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageSlider from "@/components/ui/imageslider";

export const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-amber-600">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">Premium Quality Rice Since 2024</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium Rice
                <span className="block text-amber-600">Manufacture & Export</span>
              </h1>
              <p className="text-lg text-gray-600">
                Sourcing the finest paddy from trusted farmers around Tungabhadra River belt. 
                Your reliable partner for bulk rice supply with hygenic and timely delivery.
                <br></br>
              </p>
              <br></br>
            </div>
            </div>
          </div>
<ImageSlider/>
        </div>
                

    </section>
  );
};       
