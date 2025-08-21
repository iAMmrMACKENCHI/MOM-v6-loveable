import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function RestaurantLocation() {
  return (
    <section id="location" className="py-0 relative overflow-hidden">
      {/* Split Layout - Mobile stacks, Desktop side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Content Side */}
        <div className="bg-gradient-to-br from-primary/10 to-blue-50 dark:from-primary/20 dark:to-gray-900 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg w-full">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
                Visit Us
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Located on the stunning coastline of Torquay, Victoria.
                Experience dining with panoramic ocean views and the sound of
                waves.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Address
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Unit4/38-40 Bell Street
                        <br />
                        Torquay Vic. 3228
                        <br />
                        Australia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Opening Hours
                      </h3>
                      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex justify-between">
                          <span>Monday - Thursday</span>
                          <span>7:30 AM - 8:30 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday - Sunday</span>
                          <span>8:00 AM - 11:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          Phone
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          (03) 5299 2200
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          Email
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          momcafe.456@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Map Side */}
        <div className="relative h-96 lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2832.0342441838507!2d144.3162028756767!3d-38.337412464146404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDIwJzE0LjciUyAxNDTCsDE5JzA3LjYiRQ!5e1!3m2!1sen!2sin!4v1755492717860!5m2!1sen!2sin"
            // <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2012.9364156492443!2d144.3195149222295!3d-38.337247291162186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1755492557119!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MOM Restaurant Location - Torquay, Victoria"
          />

          {/* Overlay gradient for better readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />

          {/* Floating location card - visible on larger screens */}
          <div className="hidden lg:block absolute top-8 left-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-primary p-2 rounded-full">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white font-serif">
                  MOM Torquay
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Torquay, Victoria
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Prime beachfront location with stunning ocean views and easy
              access to Torquay's famous surf beaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
