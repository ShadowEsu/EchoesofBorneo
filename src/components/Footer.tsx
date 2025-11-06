import { Heart, Instagram } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="text-xl">Echoes of Borneo</span>
            </div>
            <p className="text-emerald-100 mb-4">
              Protecting nature & uplifting communities in Kalimantan through conservation, education, and wellness.
            </p>
            <a
              href="https://www.instagram.com/echoesofborneo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-100 hover:text-white transition-colors"
            >
              <Instagram size={20} />
              <span>@echoesofborneo</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("programs")}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Our Focus */}
          <div>
            <h3 className="mb-4">Our Focus</h3>
            <ul className="space-y-2 text-emerald-100">
              <li>🌱 Conservation</li>
              <li>🎓 Education</li>
              <li>💚 Wellness</li>
              <li>🤝 Community</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-emerald-200 text-sm">
              © 2025 Echoes of Borneo. All rights reserved.
            </p>
            <p className="text-emerald-200 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-400" fill="currentColor" /> for Borneo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
