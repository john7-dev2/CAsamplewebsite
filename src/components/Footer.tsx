import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12 animate-fadeInUp">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-500">NEXUSCA</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in financial excellence and business growth.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Audit & Assurance</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Tax Advisory</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Accounting</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-amber-500" />
                <span>contact@nexusca.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-amber-500" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 Nexus Chartered Accountants. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
