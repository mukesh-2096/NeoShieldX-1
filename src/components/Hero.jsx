import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative z-10 container mx-auto px-6 py-20">
    <motion.div
      className="text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Secure AI-Powered
        <br />
        File Vault
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Military-grade encryption meets intelligent automation. Protect your files with 
        <span className="text-cyan-400 font-semibold"> RSA-4096 + AES-256-GCM</span> encryption,
        remote wipe capabilities, and quantum-resistant future-proofing.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Deploy Now
        </motion.button>
        <motion.button
          className="border-2 border-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Demo
        </motion.button>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
