import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export function ProgramsPage() {
  const programs = [
    {
      title: "Sekolah Konservasi",
      subtitle: "Conservation School Program",
      emoji: "🎓",
      image: "https://images.unsplash.com/photo-1761746257914-9b82245d7f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG5hdHVyZSUyMGNvbnNlcnZhdGlvbnxlbnwxfHx8fDE3NjIxMzQyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Membangun kesadaran lingkungan sejak dini. Siswa-siswi Sekolah Mitra Kasih dan Echoes of Borneo bergabung bersama Sahabat Bekantan Indonesia dalam kegiatan sekolah konservasi yang seru.",
      activities: [
        "Flora and fauna observation and learning",
        "Hands-on environmental education",
        "Wildlife habitat exploration",
        "Interactive conservation workshops",
      ],
      impact:
        "Building environmental awareness from an early age, creating the next generation of conservation leaders.",
      tags: ["Education", "Youth", "Conservation"],
    },
    {
      title: "Mangrove Planting",
      subtitle: "Wetland Ecosystem Restoration",
      emoji: "🌱",
      image: "https://images.unsplash.com/photo-1719214970646-71a827f691b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMHBsYW50aW5nfGVufDF8fHx8MTc2MjEzNDI1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Students don't just learn—they take action! Our mangrove planting initiatives help protect wetland ecosystems while teaching students about the critical role mangroves play in coastal protection and biodiversity.",
      activities: [
        "Community mangrove planting events",
        "Wetland ecosystem education",
        "Coastal protection initiatives",
        "Biodiversity habitat creation",
      ],
      impact:
        "Each mangrove planted helps prevent coastal erosion, provides habitat for wildlife, and sequesters carbon to fight climate change.",
      tags: ["Conservation", "Climate Action", "Restoration"],
    },
    {
      title: "Plastic War on the River",
      subtitle: "River Cleanup Initiative",
      emoji: "🌊",
      image: "https://images.unsplash.com/photo-1603260913204-7c37bdec19bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjByaXZlciUyMG5hdHVyZXxlbnwxfHx8fDE3NjIxMzQyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Taking the fight against plastic pollution directly to our rivers. Students and volunteers work together to clean waterways, learning about the devastating impact of plastic waste on aquatic ecosystems.",
      activities: [
        "River and waterway cleanup events",
        "Plastic waste collection and sorting",
        "Water quality education",
        "Community awareness campaigns",
      ],
      impact:
        "Clean rivers mean healthier ecosystems, safer drinking water, and thriving aquatic life. Every piece of plastic removed makes a difference.",
      tags: ["Cleanup", "Water", "Community"],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-700 to-emerald-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl mb-6 text-white">Our Programs</h1>
          <p className="text-xl text-emerald-100">
            Hands-on conservation, education, and community action making a real difference in Kalimantan
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-6xl mx-auto space-y-16">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl"
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
                    {program.emoji}
                  </div>
                </div>

                <div className="p-8">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {program.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-emerald-100 text-emerald-800"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-3xl text-emerald-900 mb-2">
                      {program.title}
                    </h2>
                    <p className="text-emerald-600">{program.subtitle}</p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4">
                    <p className="text-gray-700">{program.description}</p>

                    <div>
                      <h4 className="text-emerald-800 mb-2">
                        Program Activities:
                      </h4>
                      <ul className="space-y-2">
                        {program.activities.map((activity, i) => (
                          <li key={i} className="flex gap-2 text-gray-700">
                            <span className="text-emerald-600 flex-shrink-0">
                              ✓
                            </span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                      <h4 className="text-emerald-800 mb-2">Impact:</h4>
                      <p className="text-gray-700">{program.impact}</p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 px-4 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">
            Every Action Creates Impact
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Kegiatan ini membuktikan bahwa setiap tindakan kecil memiliki dampak besar bagi keberlangsungan alam kita 🌱
          </p>
          <p className="text-lg text-emerald-200">
            These activities prove that every small action has a great impact on the sustainability of our nature.
          </p>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-8 text-emerald-900">
            Our Partners
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We collaborate with dedicated organizations and schools to maximize our conservation impact:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="text-3xl mb-2">🏫</div>
              <h3 className="text-xl text-emerald-900 mb-2">
                Sekolah Mitra Kasih
              </h3>
              <p className="text-gray-600">Education Partner</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="text-3xl mb-2">🐒</div>
              <h3 className="text-xl text-emerald-900 mb-2">
                Sahabat Bekantan Indonesia
              </h3>
              <p className="text-gray-600">Conservation Partner</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
