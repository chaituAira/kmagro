
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-amber-50 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4 text-amber-600" />
              <span>+91 9900228099</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4 text-amber-600" />
              <span>info@kmagro.com</span>
            </div>
          </div>
          <div className="hidden md:block text-amber-700">
            Premium Quality Rice Since 1985
          </div>
        </div>
      </div>

{/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="src\images\icon.png" 
                alt="Karunamaya Agro Foods Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Karunamaya Agro Foods</h1>
              <p className="text-xs text-gray-600">Premium Quality Trader</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">Products</a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-amber-600 hover:bg-amber-700">Get Quote</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">Products</a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
              <Button className="bg-amber-600 hover:bg-amber-700 w-fit">Get Quote</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
