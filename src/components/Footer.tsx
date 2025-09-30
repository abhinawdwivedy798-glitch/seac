import { MapPin } from "lucide-react";

const footerLinks = {
  club: [
    { name: "About Us", href: "#" },
    { name: "Our Mission", href: "#" },
    { name: "Leadership", href: "#" },
    { name: "Join Us", href: "#" },
  ],
  activities: [
    { name: "Workshops", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Competitions", href: "#" },
    { name: "Events", href: "#" },
  ],
  resources: [
    { name: "Learning Materials", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Support", href: "#" },
  ],
  connect: [
    { name: "Newsletter", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Alumni Network", href: "#" },
    { name: "Partnerships", href: "#" },
  ],
};

const socialLinks = [
  { label: "Facebook", href: "#", icon: "🌐" },
  { label: "Twitter", href: "#", icon: "🐦" },
  { label: "LinkedIn", href: "#", icon: "💼" },
  { label: "Instagram", href: "#", icon: "📸" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Left side - Logo & Address */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">SEAC</h2>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 text-gray-400 mt-1" />
              <p className="text-gray-400">Electronics Building, Room 301</p>
            </div>
          </div>

          {/* Right side - 4 Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Club */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Club</h3>
              <ul className="space-y-3">
                {footerLinks.club.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Activities</h3>
              <ul className="space-y-3">
                {footerLinks.activities.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
              <ul className="space-y-3 mb-6">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span role="img" aria-label={social.label}>
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SEAC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
