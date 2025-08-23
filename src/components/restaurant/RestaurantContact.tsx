import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Phone, MapPin, FileText } from "lucide-react";

export default function RestaurantContact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    location: "",
    orderDescription: "",
  });
  const { toast } = useToast();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Basic validation
  //   if (!formData.fullName || !formData.phone || !formData.location) {
  //     toast({
  //       title: "Missing Information",
  //       description: "Please fill in all required fields.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   // Simulate form submission
  //   toast({
  //     title: "Order Submitted!",
  //     description: "We'll contact you soon to confirm your order details.",
  //   });

  //   // Reset form
  //   setFormData({
  //     fullName: "",
  //     phone: "",
  //     location: "",
  //     orderDescription: "",
  //   });
  // };
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!formData.fullName || !formData.phone || !formData.location) {
  //     toast({
  //       title: "Missing Information",
  //       description: "Please fill in all required fields.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   try {
  //     const response = await fetch(
  //       "https://script.google.com/macros/s/AKfycbw7o2hl8HyLtuNSXefmuDFhVc_0KLnTuNunLoxAPqxr4g0O47aHEhQoJEadGXz65Jj0mg/exec",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(formData),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const result = await response.json();

  //     if (result.result === "success") {
  //       toast({
  //         title: "Order Submitted!",
  //         description: "Your details were saved successfully.",
  //       });
  //       setFormData({
  //         fullName: "",
  //         phone: "",
  //         location: "",
  //         orderDescription: "",
  //       });
  //     } else {
  //       throw new Error("Failed to save");
  //     }
  //   } catch (error) {
  //     toast({
  //       title: "Error",
  //       description: "Something went wrong. Please try again later.",
  //       variant: "destructive",
  //     });
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.phone || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxHYkJI7Gq0460E1Ju97ltQgGpjOdWZwIHvSx-0pPp4ORrbHHbOdYej-HoKXV_xaJbe6w/exec",
        {
          method: "POST",
          mode: "no-cors", // required for Google Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      toast({
        title: "Order Submitted!",
        description: "Your order has been sent successfully ✅",
      });

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        location: "",
        orderDescription: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again ❌",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-primary/5 to-blue-50 dark:from-primary/10 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to place an order or make a reservation? Get in touch with
              us and we'll make your dining experience unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-serif text-gray-900 dark:text-white">
                  Place Your Order
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and we'll get back to you within 30
                  minutes.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="fullName"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="pl-10 h-12 rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 h-12 rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="location"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Location *
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="pl-10 h-12 rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                        placeholder="Enter your address or location"
                      />
                    </div>
                  </div>

                  {/* Order Description */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="orderDescription"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Order Description
                    </Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Textarea
                        id="orderDescription"
                        name="orderDescription"
                        value={formData.orderDescription}
                        onChange={handleChange}
                        className="pl-10 pt-3 min-h-[100px] rounded-lg border-gray-200 focus:border-primary focus:ring-primary resize-none"
                        placeholder="Tell us about your order, dietary requirements, or special requests..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Order
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information & Additional Details */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
                    Need Immediate Assistance?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Call Us
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          +61 481 559 396
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <svg
                          className="h-6 w-6 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.017 2.011c5.497 0 9.973 4.476 9.973 9.973 0 1.728-.441 3.354-1.217 4.77l1.217 4.246-4.387-1.293c-1.378.73-2.944 1.14-4.607 1.14-5.497 0-9.973-4.476-9.973-9.973S6.52 2.011 12.017 2.011z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          WhatsApp
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          +61 481 559 396
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
                    Operating Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        Monday - Thursday
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        7:30 AM - 8:30 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        Friday - Sunday
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        8:00 AM - 11:00 PM
                      </span>
                    </div>
                    <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        <strong>Note:</strong> Kitchen closes 30 minutes before
                        restaurant closing time
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
