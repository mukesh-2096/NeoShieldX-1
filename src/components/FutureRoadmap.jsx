import { Cpu, Fingerprint, Globe, Zap } from "lucide-react";

const futureFeatures = [
  { icon: <Cpu className="w-6 h-6" />, title: "Quantum-Resistant Crypto", desc: "Kyber + Dilithium PQC" },
  { icon: <Fingerprint className="w-6 h-6" />, title: "Biometric Unlock", desc: "WebAuthn Integration" },
  { icon: <Globe className="w-6 h-6" />, title: "Decentralized Storage", desc: "IPFS Integration" },
  { icon: <Zap className="w-6 h-6" />, title: "2FA Protection", desc: "OTP + Hardware Keys" }
];

const FutureRoadmap = () => (
  <section id="future" className="relative z-10 container mx-auto px-6 py-20">
    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
      Quantum-Ready Future
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {futureFeatures.map((feature, index) => (
        <div
          key={index}
          className="p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="text-yellow-400">{feature.icon}</div>
            <h3 className="font-bold">{feature.title}</h3>
          </div>
          <p className="text-gray-400 text-sm">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FutureRoadmap;
