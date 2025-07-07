import { useState, useEffect } from "react";
import { Lock, Eye, Trash2, Clock, Activity, Key } from "lucide-react";

const Features = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "AES-256-GCM + RSA-4096 Encryption",
      description: "Military-grade encryption with hybrid cryptography.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Secure Decryption & Viewing",
      description: "Password-protected decryption with in-browser viewing.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Trash2 className="w-8 h-8" />,
      title: "Remote Wipe Technology",
      description: "Each file gets a unique wipe code for remote delete.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Auto-Wipe Expiry",
      description: "Files self-destruct after specified durations.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Complete Audit Trail",
      description: "Every action is logged for full transparency.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Smart Key Management",
      description: "RSA-4096 key generation and rotation.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative z-10 container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Advanced Security Features
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            id={`feature-${index}`}
            className={`relative p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 ${
              isVisible[`feature-${index}`] ? 'animate-pulse' : ''
            }`}
            style={{
              background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)`,
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
