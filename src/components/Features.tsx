import { FaShieldAlt, FaSyncAlt, FaHeadset, FaFighterJet } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaFighterJet className="text-4xl text-indigo-500 mb-4" />,
      title: 'High Performance',
      description: 'All our tools and templates are optimized for maximum speed and SEO efficiency.',
    },
    {
      icon: <FaShieldAlt className="text-4xl text-indigo-500 mb-4" />,
      title: 'Secure Checkout',
      description: 'Your transactions are protected with industry-leading end-to-end encryption.',
    },
    {
      icon: <FaSyncAlt className="text-4xl text-indigo-500 mb-4" />,
      title: 'Lifetime Updates',
      description: 'Pay once and receive free updates for the lifetime of the product.',
    },
    {
      icon: <FaHeadset className="text-4xl text-indigo-500 mb-4" />,
      title: '24/7 Premium Support',
      description: 'Our expert development team is always ready to assist you with any technical issues.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose DigiTools?</h2>
          <p className="mt-4 text-lg text-gray-600">We provide the best resources to accelerate your development process.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow border border-gray-100">
              {feature.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}