

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
     
      <div className="bg-white border-b border-gray-100 py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mt-4 tracking-tight">
            Building the Future of Digital Commerce
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We are dedicated to providing the cleanest, fastest, and most reliable digital asset marketplace. Our mission is to simplify how developers and creators manage their digital products.
          </p>
        </div>
      </div>

      
      <div className="max-w-5xl mx-auto px-4 py-12 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-gray-900">10K+</p>
            <p className="text-xs text-gray-500 mt-1">Active Users</p>
          </div>
          <div className="border-l border-gray-100">
            <p className="text-2xl sm:text-3xl font-black text-gray-900">50K+</p>
            <p className="text-xs text-gray-500 mt-1">Downloads</p>
          </div>
          <div className="border-l border-gray-100">
            <p className="text-2xl sm:text-3xl font-black text-gray-900">99.9%</p>
            <p className="text-xs text-gray-500 mt-1">Uptime</p>
          </div>
          <div className="border-l border-gray-100">
            <p className="text-2xl sm:text-3xl font-black text-gray-900">24/7</p>
            <p className="text-xs text-gray-500 mt-1">Live Support</p>
          </div>
        </div>
      </div>

     
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-black text-gray-900 text-center mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <ValueCard 
            title="Speed & Performance" 
            description="Optimized to the bone. We ensure lag-free layouts and lightning-fast asset deliveries."
            icon="⚡"
          />
          <ValueCard 
            title="Security First" 
            description="Your tokens and products are protected by next-gen industry standard encryption structures."
            icon="🛡️"
          />
          <ValueCard 
            title="Community Driven" 
            description="We actively listen to developer feedback to build and deploy features that actually matter."
            icon="🤝"
          />
        </div>
      </div>
    </div>
  );
}


function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl bg-gray-50 w-12 h-12 flex items-center justify-center rounded-xl border border-gray-100">
        {icon}
      </div>
      <h3 className="text-base font-bold text-gray-900 mt-4">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">{description}</p>
    </div>
  );
}