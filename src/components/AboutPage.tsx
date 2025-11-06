import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1603260913204-7c37bdec19bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjByaXZlciUyMG5hdHVyZXxlbnwxfHx8fDE3NjIxMzQyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Borneo River"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl mb-4 text-white">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Dedicated to preserving Borneo's natural beauty and empowering its communities
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-8 text-center text-emerald-900">
            Our Story
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Echoes of Borneo was founded with a simple yet powerful vision: to protect the incredible biodiversity of Kalimantan, Borneo, while uplifting the communities that call this land home.
            </p>
            <p>
              Borneo is one of the world's most biodiverse regions, home to endangered species like the proboscis monkey (bekantan), orangutans, and countless other wildlife. However, rapid deforestation, pollution, and climate change threaten this precious ecosystem.
            </p>
            <p>
              We believe that conservation starts with education and community engagement. By working directly with schools, local organizations, and communities, we're building a movement of environmental stewards who understand that every action—no matter how small—can create lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-emerald-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Target className="text-emerald-700" size={32} />
                </div>
                <h3 className="text-2xl mb-4 text-emerald-900">Our Mission</h3>
                <p className="text-gray-700">
                  To protect and restore Borneo's ecosystems through conservation action, environmental education, and community empowerment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Eye className="text-emerald-700" size={32} />
                </div>
                <h3 className="text-2xl mb-4 text-emerald-900">Our Vision</h3>
                <p className="text-gray-700">
                  A thriving Borneo where nature and communities coexist in harmony, and future generations inherit a healthy, vibrant ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Heart className="text-emerald-700" size={32} />
                </div>
                <h3 className="text-2xl mb-4 text-emerald-900">Our Values</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>🌱 Sustainability</li>
                  <li>🤝 Community Partnership</li>
                  <li>📚 Education & Awareness</li>
                  <li>💚 Environmental Stewardship</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-12 text-center text-emerald-900">
            What We Do
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="text-3xl flex-shrink-0">🌳</div>
              <div>
                <h3 className="text-xl mb-2 text-emerald-800">Conservation Action</h3>
                <p className="text-gray-700">
                  We organize hands-on conservation activities including mangrove planting, river cleanups, and habitat restoration projects to protect wetland ecosystems and biodiversity.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-3xl flex-shrink-0">🎓</div>
              <div>
                <h3 className="text-xl mb-2 text-emerald-800">Environmental Education</h3>
                <p className="text-gray-700">
                  Through our Sekolah Konservasi (Conservation School) program, we partner with local schools to provide students with immersive learning experiences about flora, fauna, and ecosystem protection.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-3xl flex-shrink-0">🌊</div>
              <div>
                <h3 className="text-xl mb-2 text-emerald-800">River & Plastic Cleanup</h3>
                <p className="text-gray-700">
                  Our "Plastic War on the River" initiative mobilizes volunteers to remove plastic waste from rivers and waterways, protecting aquatic life and promoting clean water.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-3xl flex-shrink-0">🤝</div>
              <div>
                <h3 className="text-xl mb-2 text-emerald-800">Community Partnerships</h3>
                <p className="text-gray-700">
                  We collaborate with organizations like Sahabat Bekantan Indonesia and schools like Sekolah Mitra Kasih to maximize our impact and build a strong network of conservation advocates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Follow our journey and stay updated on our conservation efforts
          </p>
          <a
            href="https://www.instagram.com/echoesofborneo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-900 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            <span>📸</span>
            <span>Follow us on Instagram</span>
          </a>
        </div>
      </section>
    </div>
  );
}
