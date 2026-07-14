"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  category: string;
  price: number;
}

export default function ManageItems() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products?limit=50");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

 
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
       
        setProducts(products.filter((product) => product._id !== id));
      } else {
        alert("Failed to delete the item.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Manage Items
        </h1>
      </div>

     
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 flex flex-col gap-3"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {product.category}
              </p>
            </div>
            <div className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
              ${product.price.toFixed(2)}
            </div>
            <div className="flex gap-2 mt-2">
              <Link
                href={`/products/${product._id}`}
                className="flex-1 text-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-2 rounded-md text-sm font-medium transition-colors"
              >
                View
              </Link>
              <button
                onClick={() => handleDelete(product._id)}
                className="flex-1 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 text-red-600 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            No items found.
          </div>
        )}
      </div>

      
      <div className="hidden md:block bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Title</th>
                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Category</th>
                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Price</th>
                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-sm text-gray-900 dark:text-white font-medium">
                    {product.title}
                  </td>
                  <td className="p-4 text-sm text-gray-500 dark:text-gray-400">
                    {product.category}
                  </td>
                  <td className="p-4 text-sm text-gray-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="p-4 flex justify-end gap-4 items-center">
                    <Link
                      href={`/products/${product._id}`}
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium text-sm transition-colors"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 font-medium text-sm transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500 dark:text-gray-400">
                    No items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}