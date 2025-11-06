import { Leaf, Users, Heart, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const pillars = [
    {
      icon: Leaf,
      title: "Conservation",
      description: "Protecting Borneo's precious ecosystems and biodiversity for future generations.",
    },
    {
      icon: Users,
      title: "Education",
      description: "Building environmental awareness through hands-on conservation programs for students.",
    },
    {
      icon: Heart,
      title: "Wellness",
      description: "Uplifting communities in Kalimantan through sustainable practices and support.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1707085087954-31f25e41e003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3JuZW8lMjByYWluZm9yZXN0fGVufDF8fHx8MTc2MjEzNDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Borneo Rainforest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-6xl sm:text-7xl">🌿</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-white">
            Voices for Borneo
          </h1>
          <p className="text-xl sm:text-2xl mb-4">
            🌏 Protecting nature & uplifting communities in Kalimantan
          </p>
          <p className="text-lg sm:text-xl mb-8">
            🤝 Conservation • Education • Wellness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate("programs")}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Our Programs
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => onNavigate("contact")}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
            >
              Join the Movement
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-emerald-900">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to protecting Borneo's natural heritage while empowering local communities through education and sustainable practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-lg"
                >
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Icon className="text-emerald-700" size={32} />
                    </div>
                    <h3 className="text-xl mb-3 text-emerald-900">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-emerald-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">
              📍 Act for Impact
            </h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              Every action counts. Join us in making a real difference for Borneo's ecosystems and communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🌱</div>
              <div className="text-3xl mb-1">1000+</div>
              <div className="text-emerald-200">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">👨‍🎓</div>
              <div className="text-3xl mb-1">500+</div>
              <div className="text-emerald-200">Students Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏞️</div>
              <div className="text-3xl mb-1">10+</div>
              <div className="text-emerald-200">Conservation Sites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🤝</div>
              <div className="text-3xl mb-1">50+</div>
              <div className="text-emerald-200">Community Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 text-emerald-900">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our community of conservationists, educators, and changemakers working to protect Borneo's future.
          </p>
          <Button
            onClick={() => onNavigate("contact")}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Get Involved Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
