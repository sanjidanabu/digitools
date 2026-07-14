
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaSpinner, FaShoppingCart, FaStar, FaEye } from 'react-icons/fa';

interface Product {
  _id: string;
  title: string;
  category: string;
  price: number;
  rating?: number;
  sales?: number;
  image?: string;
}

export default function HomeProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchLiveProducts = async (currentPage: number, searchKeyword: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/products?page=${currentPage}&limit=8&search=${searchKeyword}`);
      const data = await res.json();
      if (data.products) {
        setProducts(data.products);
        setTotalPages(data.totalPages);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchLiveProducts(page, search);
    }, 400); 
    return () => clearTimeout(delayDebounce);
  }, [page, search]);

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-black text-gray-900">Explore Digital Assets</h2>
            <p className="text-xs text-gray-500">Live feed from MongoDB collection</p>
          </div>

         
          <div className="relative w-full sm:w-80">
            <FaSearch className="absolute left-3 top-3.5 text-gray-400 text-xs" />
            <input 
              type="text" placeholder="Search item..." value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              className="w-full pl-9 pr-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-gray-900 bg-white"
            />
          </div>
        </div>

        
        {loading ? (
          <div className="flex justify-center items-center h-48"><FaSpinner className="animate-spin text-3xl text-indigo-600" /></div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all">
                <div className="w-full h-40 bg-gradient-to-tr from-indigo-500 to-purple-500 relative flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  ) : (
                    <span className="text-white text-xs opacity-60 font-semibold tracking-wide">Premium Template</span>
                  )}
                  
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/products/${product._id}`} className="p-2.5 bg-white text-gray-900 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-colors" title="View Details">
                      <FaEye />
                    </Link>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">{product.category}</span>
                  <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mt-0.5 mb-2">{product.title}</h3>
                  
                  <div className="flex items-center text-xs text-gray-400 mt-auto mb-3">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-gray-700 font-bold mr-2">{product.rating || '4.7'}</span>
                    <span>• {product.sales || '12'}+ Sales</span>
                  </div>

                  <div className="flex items-center justify-between border-t pt-2.5">
                    <span className="text-base font-black text-gray-900">${product.price}</span>
                    <button className="flex items-center gap-1 px-2.5 py-1.5 bg-indigo-50 text-indigo-600 font-bold rounded-lg text-[11px] hover:bg-indigo-600 hover:text-white transition-colors">
                      <FaShoppingCart /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-dashed text-sm">No assets available.</div>
        )}

        
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 space-x-2 text-xs">
            <button disabled={page === 1} onClick={() => setPage(p => Math.max(p - 1, 1))} className="px-3 py-2 border rounded-lg bg-white disabled:opacity-40 font-medium text-gray-700">Prev</button>
            <span className="text-gray-500">Page <b>{page}</b> of {totalPages}</span>
            <button disabled={page === totalPages} onClick={() => setPage(p => Math.min(p + 1, totalPages))} className="px-3 py-2 border rounded-lg bg-white disabled:opacity-40 font-medium text-gray-700">Next</button>
          </div>
        )}

      </div>
    </section>
  );
}