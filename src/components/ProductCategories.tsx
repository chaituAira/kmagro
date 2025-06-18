
import { Card, CardContent } from "@/components/ui/card";

export const ProductCategories = () => {
  const products = [
    {
      name: "Basmati Rice",
      description: "Premium long-grain aromatic rice perfect for biryanis and pilafs",
      image: "🌾",
      varieties: ["1121 Basmati", "Traditional Basmati", "Pusa Basmati"]
    },
    {
      name: "Jasmine Rice",
      description: "Fragrant Thai jasmine rice with delicate floral aroma",
      image: "🍚",
      varieties: ["Thai Jasmine", "Premium Jasmine", "Organic Jasmine"]
    },
    {
      name: "Brown Rice",
      description: "Nutritious whole grain rice packed with fiber and nutrients",
      image: "🌾",
      varieties: ["Long Grain Brown", "Short Grain Brown", "Wild Rice Mix"]
    },
    {
      name: "Parboiled Rice",
      description: "Pre-cooked rice that retains more nutrients and has better texture",
      image: "🍚",
      varieties: ["Golden Parboiled", "White Parboiled", "Steam Processed"]
    },
    {
      name: "Sushi Rice",
      description: "Short-grain rice perfect for sushi and Japanese cuisine",
      image: "🍱",
      varieties: ["Premium Sushi", "Organic Sushi", "Traditional Japonica"]
    },
    {
      name: "Wild Rice",
      description: "Nutrient-dense grain with nutty flavor and chewy texture",
      image: "🌾",
      varieties: ["Black Wild Rice", "Red Wild Rice", "Mixed Wild Rice"]
    }
  ];

  return (
    <section id="products" className="py-16 lg:py-24 bg-white">
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
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{product.image}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-700 text-sm">Available Varieties:</h4>
                  <ul className="space-y-1">
                    {product.varieties.map((variety, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                        {variety}
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
