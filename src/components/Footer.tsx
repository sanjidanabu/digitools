import Link from 'next/link';
import { 
  FaFacebook, 
  FaTwitter, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white tracking-wide">
              Digi<span className="text-indigo-500">Tools</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your ultimate platform for discovering premium digital assets, UI kits, and development tools. We empower creators to build faster and design better.
            </p>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/explore" className="text-sm hover:text-indigo-400 transition-colors">
                  Explore Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-indigo-400 transition-colors">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-indigo-400 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal & Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-sm hover:text-indigo-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-indigo-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-indigo-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-indigo-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">123 Tech Avenue, Innovation Block, Web City, 4500</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-indigo-500 flex-shrink-0" />
                <a href="mailto:support@digitools.com" className="text-sm hover:text-white transition-colors">
                  support@digitools.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-indigo-500 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

        </div>

        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {currentYear} DigiTools. All rights reserved.
          </p>

          
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-500 transition-colors" aria-label="Facebook">
              <FaFacebook className="text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-400 transition-colors" aria-label="Twitter">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
              <FaLinkedin className="text-xl" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}