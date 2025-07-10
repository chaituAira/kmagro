
import { Card, CardContent } from "@/components/ui/card";

export const ProductCategories = () => {
  const products = [
    {
      name: "Sona Masoori Rice",
      image: "../src/images/product.png",

      varieties: ["Medium-grain rice with excellent aroma and taste"],
      Character: ["Light, fluffy texture when cooked, perfect for daily consumption"],
      Origins: ["Karnataka, India"],
      bests: ["Everyday meals, biryanis, and traditional Indian dishes"],
      Package: ["Available in 25kg, 50kg bags and custom packaging"]
    },
    {
      name: "RNR Lachkari Woda Kollam Rice",
      image: "../src/images/product2.png",
        varieties: ["Traditional variety with exceptional nutritional value"],
      Character: ["Rich in fiber, distinctive taste, and superior cooking quality"],
      Origins: ["Karnataka, India"],
      bests: ["Health-conscious consumers, traditional recipes, export markets"],
      Package: ["Available in 25kg, 50kg bags and custom packaging"]
    },
    {
      name: "Sona Masoori Raw Rice",
      image: "../src/images/product3.png",
      varieties: ["Unpolished raw rice with natural nutrients intact"],
      Character: ["Higher nutritional value, longer shelf life, natural processing"],
      Origins: ["Karnataka, India"],
      bests: ["Health-focused markets, organic food enthusiasts, export"],
      Package: ["Available in 25kg, 50kg bags and custom packaging"]
    }
  ];

  return (
    <section id="products" className="py-5 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Rice Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our extensive collection of premium rice varieties sourced from the finest farms around the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                   <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                </div>
              <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-700 text-sm">Premium Quality:</h4>
                  <ul className="space-y-1">
                    {product.varieties.map((variety, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                        {variety}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-700 text-sm">Characteristics:</h4>
                  <ul className="space-y-1">
                    {product.Character.map((Characteristics, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                        {Characteristics}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-700 text-sm">Origin:</h4>
                  <ul className="space-y-1">
                    {product.Origins.map((Origin, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                        {Origin}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-700 text-sm">Best For:</h4>
                  <ul className="space-y-1">
                    {product.bests.map((best, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                        {best}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-700 text-sm">Packaging:</h4>
                  <ul className="space-y-1">
                    {product.Package.map((Packaging, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                        {Packaging}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
