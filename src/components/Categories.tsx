import { FiLayout, FiBox, FiCode, FiSmartphone } from 'react-icons/fi';
import Link from 'next/link';

export default function Categories() {
  const categories = [
    { name: 'UI/UX Kits', icon: <FiLayout />, count: '120+ Items', link: '/categories/ui-kits' },
    { name: 'Web Templates', icon: <FiBox />, count: '85+ Items', link: '/categories/templates' },
    { name: 'React Components', icon: <FiCode />, count: '200+ Items', link: '/categories/components' },
    { name: 'Mobile App UI', icon: <FiSmartphone />, count: '45+ Items', link: '/categories/mobile' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Explore Categories</h2>
            <p className="mt-2 text-gray-600">Find exactly what you need for your next big project.</p>
          </div>
          <Link href="/explore" className="hidden sm:block text-indigo-600 font-medium hover:text-indigo-800">
            View All Categories &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.link} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 flex items-center space-x-4">
              <div className="p-4 bg-indigo-50 text-indigo-600 rounded-lg text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {category.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}