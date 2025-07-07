import { FileText } from "lucide-react";

const Architecture = () => (
  <section className="relative z-10 container mx-auto px-6 py-20">
    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      Architecture Overview
    </h2>
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
        <div className="font-mono text-sm space-y-2">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400">NeoShieldX/</span>
          </div>
          <div className="ml-6 space-y-1">
            <div className="text-gray-300">├── encryption/ <span className="text-green-400"># Hybrid crypto engine</span></div>
            <div className="text-gray-300">├── key_manager/ <span className="text-blue-400"># RSA-4096 keys</span></div>
            <div className="text-gray-300">├── secure_storage/ <span className="text-purple-400"># Encrypted vault</span></div>
            <div className="text-gray-300">├── templates/ <span className="text-orange-400"># Modern UI</span></div>
            <div className="text-gray-300">└── logs/ <span className="text-red-400"># Audit trails</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Architecture;
