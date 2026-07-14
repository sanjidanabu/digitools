
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaShoppingCart, FaStar, FaArrowLeft } from 'react-icons/fa';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DynamicProductPage({ params }: PageProps) {
  const { id } = await params;

  if (!id || id.length !== 24) notFound();

  let asset = null;
  try {
    const client = await clientPromise;
    const db = client.db('digitools_db');
    asset = await db.collection('products').findOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.error(error);
  }

  if (!asset) notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-5xl mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-indigo-600 mb-6 transition-all">
          <FaArrowLeft /> Back to Dashboard
        </Link>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          
         
          <div className="w-full h-56 sm:h-72 md:h-96 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center overflow-hidden">
            {asset.image ? (
              <img src={asset.image} alt={asset.title} className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-sm font-bold tracking-wider opacity-60">DigiTools Resource File</span>
            )}
          </div>

         
          <div className="flex flex-col justify-between py-1">
            <div>
              <span className="inline-block text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md uppercase tracking-wider">{asset.category}</span>
              <h1 className="text-xl sm:text-2xl font-black text-gray-900 mt-2.5">{asset.title}</h1>
              
              <div className="flex items-center text-xs text-gray-400 my-3">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-gray-800 font-bold">{asset.rating || '4.7'}</span>
                <span className="ml-3">• {asset.sales || '12'}+ Active Users</span>
              </div>

              <div className="mt-4 border-t border-gray-50 pt-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Asset Details</h4>
                <p className="text-sm text-gray-600 leading-relaxed mt-1.5 whitespace-pre-line">{asset.description}</p>
              </div>
            </div>

            <div className="mt-6 border-t pt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] text-gray-400 font-medium">License buyout cost</p>
                <span className="text-2xl font-black text-gray-900">${asset.price}</span>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl text-xs hover:bg-indigo-700 transition-colors shadow-sm">
                <FaShoppingCart /> Buy Now
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}