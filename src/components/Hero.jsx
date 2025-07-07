const Hero = () => (
  <section className="relative z-10 container mx-auto px-6 py-20">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
        Secure AI-Powered
        <br />
        File Vault
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
        Military-grade encryption meets intelligent automation. Protect your files with 
        <span className="text-cyan-400 font-semibold"> RSA-4096 + AES-256-GCM</span> encryption,
        remote wipe capabilities, and quantum-resistant future-proofing.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
          Deploy Now
        </button>
        <button className="border-2 border-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
          View Demo
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
