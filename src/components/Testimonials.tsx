import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Frontend Developer',
      review: 'DigiTools completely transformed my workflow. The React components are clean, well-documented, and incredibly easy to integrate into my Next.js projects.',
    },
    {
      name: 'David Chen',
      role: 'UI/UX Designer',
      review: 'The quality of the UI kits here is unmatched. It saved me weeks of design work, and the mobile-first approach is exactly what I needed.',
    },
    {
      name: 'Emily Carter',
      role: 'Freelance Engineer',
      review: 'Excellent support and beautiful code. I bought a dashboard template and had a minor issue, but their support team fixed it within an hour!',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Loved by Developers</h2>
          <p className="mt-4 text-lg text-gray-600">See what our community is saying about our products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative">
              <div className="flex text-yellow-400 mb-4">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-gray-700 italic mb-6">{item.review}</p>
              <div>
                <h4 className="font-bold text-gray-900">{item.name}</h4>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}