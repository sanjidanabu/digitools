'use client';
export default function Newsletter() {
  return (
    <section className="py-20 bg-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Get 20% off your first purchase!
        </h2>
        <p className="mt-4 text-lg text-indigo-100">
          Subscribe to our newsletter to receive exclusive discounts, new product alerts, and development tips straight to your inbox.
        </p>
        
        <form className="mt-8 sm:flex justify-center max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md text-gray-900"
            placeholder="Enter your email"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="mt-3 text-sm text-indigo-200">
          We care about the protection of your data. Read our <a href="/privacy" className="text-white underline hover:text-indigo-100">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}