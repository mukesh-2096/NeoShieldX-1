import { Shield } from "lucide-react";

const Navbar = () => (
  <header className="relative z-10 container mx-auto px-6 py-8">
    <nav className="flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <Shield className="w-10 h-10 text-cyan-400" />
        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          NeoShieldX
        </span>
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
        <a href="#security" className="hover:text-cyan-400 transition-colors">Security</a>
        <a href="#future" className="hover:text-cyan-400 transition-colors">Future</a>
      </div>
    </nav>
  </header>
);

export default Navbar;
