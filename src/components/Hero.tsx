import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageSlider from "./ui/imageslider";

export const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
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
              <p className="text-lg text-gray-600 max-w-lg">
                Sourcing the finest paddy from trusted farmers around Tungabhadra River belt. 
                Your reliable partner for bulk rice supply with hygenic and timely delivery.
              </p>
            </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-96 lg:h-[500px] rounded-2xl shadow-2xl overflow-hidden">
                {/* <img 
                  src="src\images\slide1.png"
                  alt="Premium rice varieties in wooden bowls"
                  className="w-full h-full object-cover"
                />. */}

                {/* Image Slider */}
      <main className="px-4 pb-16">
        <ImageSlider />
      </main>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Premium Rice Collections</h3>
                  <p className="text-gray-200">Quality Guaranteed from Farm to Table</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-300 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
    </section>
  );
};       
