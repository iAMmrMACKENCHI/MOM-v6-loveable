import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "breakfast" | "lunch" | "dinner";
  isSpecial?: boolean;
}

const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: "1",
    name: "Sunrise Pancakes",
    description:
      "Fluffy pancakes with fresh berries, maple syrup, and whipped cream",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
    category: "breakfast",
    isSpecial: true,
  },
  {
    id: "2",
    name: "Coastal Benedict",
    description:
      "Poached eggs on toasted brioche with smoked salmon and hollandaise",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop",
    category: "breakfast",
  },
  {
    id: "3",
    name: "Avocado Toast Deluxe",
    description:
      "Sourdough toast with smashed avocado, cherry tomatoes, and feta",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
    category: "breakfast",
  },
  {
    id: "4",
    name: "Ocean Smoothie Bowl",
    description: "Acai bowl topped with granola, coconut, and tropical fruits",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop",
    category: "breakfast",
  },

  // Lunch
  {
    id: "5",
    name: "Grilled Barramundi",
    description:
      "Fresh local barramundi with seasonal vegetables and lemon butter",
    price: 32,
    image: "/dishes/5adcc762-67c0-4177-9ce3-4ba716bd8e74.jpg",
    category: "lunch",
    isSpecial: true,
  },
  {
    id: "6",
    name: "Seafood Linguine",
    description: "Fresh prawns, scallops, and mussels in white wine sauce",
    price: 28,
    image: "/dishes/024a5787-c51b-453e-869d-4db0250c746a.jpg",
    category: "lunch",
  },
  {
    id: "7",
    name: "Beach Burger",
    description: "Wagyu beef patty with bacon, cheese, and house-made chips",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    category: "lunch",
  },
  {
    id: "8",
    name: "Mediterranean Salad",
    description: "Mixed greens, olives, feta, tomatoes with balsamic dressing",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
    category: "lunch",
  },

  // Dinner
  {
    id: "9",
    name: "Surf & Turf",
    description:
      "Grilled lobster tail and prime beef fillet with garlic butter",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    category: "dinner",
    isSpecial: true,
  },
  {
    id: "10",
    name: "Pan-Seared Salmon",
    description: "Atlantic salmon with roasted vegetables and herb sauce",
    price: 38,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
    category: "dinner",
  },
  {
    id: "11",
    name: "Lamb Rack",
    description: "Herb-crusted lamb rack with rosemary jus and seasonal sides",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    category: "dinner",
  },
  {
    id: "12",
    name: "Seafood Platter",
    description: "Fresh oysters, prawns, crab, and fish of the day",
    price: 72,
    image: "/dishes/600751b4-5cff-44b5-8aaf-ad125d5a8f83.jpg",
    category: "dinner",
  },
];

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState<
    "breakfast" | "lunch" | "dinner"
  >("breakfast");

  const categories = [
    { id: "breakfast", name: "Breakfast", time: "7:00 AM - 11:30 AM" },
    { id: "lunch", name: "Lunch", time: "12:00 PM - 3:00 PM" },
    { id: "dinner", name: "Dinner", time: "5:30 PM - 10:00 PM" },
  ];

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our carefully crafted dishes featuring the freshest local
            ingredients and seafood from Torquay's pristine waters
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() =>
                setActiveCategory(
                  category.id as "breakfast" | "lunch" | "dinner"
                )
              }
              className={`rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              <div className="text-center">
                <div className="font-semibold">{category.name}</div>
                <div className="text-xs opacity-70">{category.time}</div>
              </div>
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in border-0 shadow-lg flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.isSpecial && (
                  <Badge className="absolute top-3 right-3 bg-yellow-500 text-black font-semibold">
                    Chef's Special
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-serif group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-primary">
                    ${item.price}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>
                <Button
                  className="w-full rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg mt-auto"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Add to Order
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-12 py-4 transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}
