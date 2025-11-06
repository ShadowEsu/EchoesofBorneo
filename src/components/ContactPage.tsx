import { Mail, Instagram, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Label } from "./ui/label";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    toast.success("Message sent! We'll get back to you soon.", {
      description: "Thank you for reaching out to Echoes of Borneo.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-700 to-emerald-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl mb-6 text-white">Get in Touch</h1>
          <p className="text-xl text-emerald-100">
            Join the movement. Let's work together to protect Borneo's future.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-2 border-emerald-100">
                <CardHeader>
                  <h2 className="text-2xl text-emerald-900">Send us a Message</h2>
                  <p className="text-gray-600">
                    Have questions or want to get involved? We'd love to hear from you!
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        required
                        rows={6}
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Send className="mr-2" size={18} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl mb-6 text-emerald-900">
                  Other Ways to Connect
                </h2>
                <div className="space-y-6">
                  <Card className="border-2 border-emerald-100">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Instagram className="text-emerald-700" size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg mb-1 text-emerald-900">
                            Social Media
                          </h3>
                          <p className="text-gray-600 mb-2">
                            Follow us for updates on our conservation work
                          </p>
                          <a
                            href="https://www.instagram.com/echoesofborneo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 hover:text-emerald-700 hover:underline"
                          >
                            @echoesofborneo
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-emerald-100">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="text-emerald-700" size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg mb-1 text-emerald-900">
                            Email
                          </h3>
                          <p className="text-gray-600 mb-2">
                            For general inquiries and partnerships
                          </p>
                          <a
                            href="mailto:info@echoesofborneo.org"
                            className="text-emerald-600 hover:text-emerald-700 hover:underline"
                          >
                            info@echoesofborneo.org
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-emerald-100">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-emerald-700" size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg mb-1 text-emerald-900">
                            Location
                          </h3>
                          <p className="text-gray-600">
                            Based in Kalimantan, Borneo, Indonesia
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Get Involved */}
              <Card className="bg-emerald-900 text-white border-0">
                <CardContent className="pt-6">
                  <h3 className="text-2xl mb-4">Get Involved</h3>
                  <p className="mb-6 text-emerald-100">
                    There are many ways to support our mission and make a difference for Borneo's ecosystems:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-emerald-300">🌱</span>
                      <span>Join our conservation activities and cleanups</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-300">🎓</span>
                      <span>Volunteer for our educational programs</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-300">🤝</span>
                      <span>Partner with us for community projects</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-300">📢</span>
                      <span>Spread awareness about our work</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-12 text-center text-emerald-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card className="border-2 border-emerald-100">
              <CardContent className="pt-6">
                <h3 className="text-lg mb-2 text-emerald-900">
                  How can I participate in your programs?
                </h3>
                <p className="text-gray-700">
                  We welcome volunteers and participants of all ages! Follow us on Instagram for announcements about upcoming events, or reach out through our contact form to learn about current opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-100">
              <CardContent className="pt-6">
                <h3 className="text-lg mb-2 text-emerald-900">
                  Can schools partner with Echoes of Borneo?
                </h3>
                <p className="text-gray-700">
                  Absolutely! We're always looking to expand our Sekolah Konservasi program. Contact us to discuss how we can bring environmental education to your students.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-100">
              <CardContent className="pt-6">
                <h3 className="text-lg mb-2 text-emerald-900">
                  How can I support your work?
                </h3>
                <p className="text-gray-700">
                  You can support us by participating in our activities, spreading awareness about conservation issues, and partnering with us on community projects. Every action counts!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
