
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlusCircle, FaSpinner } from 'react-icons/fa';

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  
  const [form, setForm] = useState({
    title: '',
    category: 'UI/UX Kits',
    price: '',
    image: '',
    description: ''
  });

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg('');

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatusMsg('🎉 Product added successfully!');
        router.push('/'); 
      } else {
        setStatusMsg('❌ Something went wrong.');
      }
    } catch (err) {
      setStatusMsg('❌ Submission failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="text-center mb-6">
          <FaPlusCircle className="text-4xl text-indigo-600 mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold text-gray-900">Upload New Asset</h2>
        </div>

        {statusMsg && (
          <div className={`p-4 rounded-xl mb-4 text-xs font-semibold ${statusMsg.includes('🎉') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {statusMsg}
          </div>
        )}

        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase">Product Title *</label>
            <input type="text" required value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="mt-1 w-full px-4 py-2.5 border rounded-xl text-gray-900 outline-none focus:border-indigo-500" placeholder="Tailwind Dashboard UI" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase">Category</label>
              <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="mt-1 w-full px-4 py-2.5 border rounded-xl text-gray-900 bg-white architecture-none">
                <option value="UI/UX Kits">UI/UX Kits</option>
                <option value="Web Templates">Web Templates</option>
                <option value="React Components">React Components</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase">Price ($) *</label>
              <input type="number" step="0.01" required value={form.price} onChange={e => setForm({...form, price: e.target.value})} className="mt-1 w-full px-4 py-2.5 border rounded-xl text-gray-900" placeholder="19.99" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase">Image URL</label>
            <input type="text" value={form.image} onChange={e => setForm({...form, image: e.target.value})} className="mt-1 w-full px-4 py-2.5 border rounded-xl text-gray-900" placeholder="https://image-link.png" />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase">Description</label>
            <textarea rows={3} value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="mt-1 w-full px-4 py-2.5 border rounded-xl text-gray-900 resize-none" placeholder="Short features..." />
          </div>

          <button type="submit" disabled={loading} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex justify-center items-center">
            {loading ? <FaSpinner className="animate-spin text-lg" /> : 'Upload Product'}
          </button>
        </form>
      </div>
    </div>
  );
}