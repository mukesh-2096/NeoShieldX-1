import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="relative z-10 border-t border-gray-700 mt-20">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <Shield className="w-8 h-8 text-cyan-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            NeoShieldX
          </span>
        </div>
        <div className="text-gray-400">
          Secure • Quantum-Ready • Open Source
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
