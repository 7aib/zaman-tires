'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Plus, Trash2 } from 'lucide-react';
import AdminProductForm from '@/components/AdminProductForm';

interface Product {
  id: string;
  name: string;
  type: 'tyre' | 'rim';
  brand: { name: string } | null;
  diameter: { value: number } | null;
  rimWidth?: string;
  tireProfile?: string;
  price: number;
  description: string;
  imageUrl?: string;
  createdAt: string;
}

interface Brand { id: string; name: string; type: string; }
interface Diameter { id: number; value: number; }

export const dynamic = 'force-dynamic';

export default function AdminDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [diameters, setDiameters] = useState<Diameter[]>([]);

  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'products' | 'brands' | 'diameters' | 'add'>('products');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // New item state
  const [newItemName, setNewItemName] = useState('');
  const [newItemType, setNewItemType] = useState('both'); // For Brand

  // Add Product Form State
  const [formData, setFormData] = useState({
    name: '',
    type: 'tyre' as 'tyre' | 'rim',
    brand: '', // ID
    diameter: '', // Value (e.g. "17")
    price: '',
    description: '',
    quantity: '0',
    imageUrl: '',
    rimWidth: '',
    tireProfile: ''
  });

  useEffect(() => {
    checkAuth();
    fetchAllData();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/verify', { method: 'GET' });
      if (!response.ok) {
        router.push('/admin');
        return;
      }
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Auth check failed:', err);
      router.push('/admin');
    }
  };

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [prodRes, brandRes, diaRes] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/brands'),
        fetch('/api/diameters')
      ]);

      if (prodRes.ok) setProducts(await prodRes.json());
      if (brandRes.ok) setBrands(await brandRes.json());
      if (diaRes.ok) setDiameters(await diaRes.json());
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin');
    } catch {
      console.error('Logout failed');
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      const response = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setProducts(products.filter((p) => p.id !== id));
      } else {
        setError('Failed to delete product');
      }
    } catch (err) {
      setError('Error deleting product');
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to add product');
      const addedProduct = await response.json();
      setProducts([addedProduct, ...products]);
      setActiveTab('products');
      setFormData({ ...formData, name: '', price: '', description: '', rimWidth: '', tireProfile: '' }); // Reset partial
      setError('');
    } catch (err) {
      setError('Failed to add product');
    }
  };

  const handleAddEntity = async (type: 'brands' | 'diameters') => {
    if (!newItemName) return;
    const endpoint = type === 'brands' ? '/api/brands' : '/api/diameters';
    const body: any = type === 'brands'
      ? { name: newItemName, type: newItemType }
      : { value: newItemName }; // API handles int conversion

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to add item');

      const added = data;
      if (type === 'brands') setBrands([...brands, added]);
      else setDiameters([...diameters, added].sort((a, b) => a.value - b.value));

      setNewItemName('');
    } catch (err: any) {
      setError(err.message || 'Failed to add item');
    }
  };

  const handleDeleteEntity = async (type: 'brands' | 'diameters', id: string | number) => {
    if (!confirm(`Are you sure you want to delete this ${type === 'brands' ? 'brand' : 'diameter'}? This may fail if it's linked to products.`)) return;

    try {
      const endpoint = type === 'brands' ? `/api/brands/${id}` : `/api/diameters/${id}`;
      const res = await fetch(endpoint, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to delete');
      }

      if (type === 'brands') {
        setBrands(brands.filter(b => b.id !== id));
      } else {
        setDiameters(diameters.filter(d => d.id !== id));
      }
    } catch (err: any) {
      setError(err.message || 'Failed to delete item');
    }
  };

  if (loading || !isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 border-b border-gray-300">
          <button onClick={() => setActiveTab('products')} className={`px-4 py-2 ${activeTab === 'products' ? 'border-b-2 border-blue-600 text-blue-600' : ''}`}>Products</button>
          <button onClick={() => setActiveTab('brands')} className={`px-4 py-2 ${activeTab === 'brands' ? 'border-b-2 border-blue-600 text-blue-600' : ''}`}>Brands</button>
          <button onClick={() => setActiveTab('diameters')} className={`px-4 py-2 ${activeTab === 'diameters' ? 'border-b-2 border-blue-600 text-blue-600' : ''}`}>Diameters</button>
          <button onClick={() => setActiveTab('add')} className={`px-4 py-2 flex items-center gap-2 ${activeTab === 'add' ? 'border-b-2 border-blue-600 text-blue-600' : ''}`}><Plus size={18} /> Add Product</button>
        </div>

        {error && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">{error}</div>}

        {activeTab === 'add' && (
          <form onSubmit={handleAddProduct} className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Type</label>
                <select className="w-full p-2 border rounded" value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value as any })}>
                  <option value="tyre">Tyre</option>
                  <option value="rim">Rim</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Diameter</label>
                <select className="w-full p-2 border rounded" value={formData.diameter} onChange={e => setFormData({ ...formData, diameter: e.target.value })} required>
                  <option value="">Select Diameter</option>
                  {diameters.map(d => <option key={d.id} value={d.value}>{d.value} inch</option>)}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Brand</label>
              <select className="w-full p-2 border rounded" value={formData.brand} onChange={e => setFormData({ ...formData, brand: e.target.value })} required>
                <option value="">Select Brand</option>
                {brands.filter(b => b.type === 'both' || b.type === formData.type).map(b => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Product Name</label>
              <input className="w-full p-2 border rounded" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
            </div>

            {formData.type === 'rim' && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Rim Width (JJ)</label>
                <input className="w-full p-2 border rounded" placeholder="e.g. 8jj" value={formData.rimWidth} onChange={e => setFormData({ ...formData, rimWidth: e.target.value })} />
              </div>
            )}
            {formData.type === 'tyre' && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Tire Profile</label>
                <input className="w-full p-2 border rounded" placeholder="e.g. 205/65" value={formData.tireProfile} onChange={e => setFormData({ ...formData, tireProfile: e.target.value })} />
              </div>
            )}

            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input type="number" className="w-full p-2 border rounded" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Quantity</label>
                <input type="number" className="w-full p-2 border rounded" value={formData.quantity} onChange={e => setFormData({ ...formData, quantity: e.target.value })} />
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={(formData as any).isActive !== false}
                  onChange={e => setFormData({ ...formData, isActive: e.target.checked } as any)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Display this product (Active)</span>
              </label>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea className="w-full p-2 border rounded" rows={3} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} required />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Product Image</label>
              <div className="flex items-center gap-4">
                {formData.imageUrl && (
                  <div className="w-20 h-20 relative bg-gray-100 rounded border overflow-hidden">
                    <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, imageUrl: '' })}
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl text-xs"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                )}
                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      const data = new FormData();
                      data.append('file', file);

                      try {
                        const res = await fetch('/api/upload', {
                          method: 'POST',
                          body: data
                        });
                        if (!res.ok) throw new Error('Upload failed');
                        const json = await res.json();
                        setFormData(prev => ({ ...prev, imageUrl: json.url }));
                      } catch (err) {
                        alert("Failed to upload image");
                      }
                    }}
                    className="w-full p-2 border rounded"
                  />
                  <p className="text-xs text-gray-500 mt-1">Uploads locally to /public/uploads</p>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Product</button>
          </form>
        )}

        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.length === 0 && <p className="text-gray-500">No products found.</p>}
            {products.map(p => (
              <div key={p.id} className={`bg-white p-6 rounded shadow border ${!(p as any).isActive ? 'opacity-60 grayscale-[0.5]' : ''}`}>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  {!(p as any).isActive && (
                    <span className="bg-gray-100 text-gray-600 text-[10px] uppercase px-1.5 py-0.5 rounded font-bold">Inactive</span>
                  )}
                </div>
                <div className="text-sm text-gray-500 mt-2 space-y-1">
                  <p>Type: <span className="uppercase font-semibold">{p.type}</span></p>
                  <p>Brand: {p.brand?.name}</p>
                  <p>Diameter: {p.diameter?.value}"</p>
                  {p.type === 'rim' && <p>Width: {p.rimWidth}</p>}
                  {p.type === 'tyre' && <p>Profile: {p.tireProfile}</p>}
                </div>
                <p className="text-blue-600 font-bold mt-2">Rs. {p.price}</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <button onClick={() => handleDeleteProduct(p.id)} className="text-red-600 flex items-center gap-1 text-sm hover:underline">
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'brands' && (
          <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">
            <div className="flex gap-2 mb-6">
              <input className="flex-1 p-2 border rounded" placeholder="Brand Name" value={newItemName} onChange={e => setNewItemName(e.target.value)} />
              <select className="p-2 border rounded" value={newItemType} onChange={e => setNewItemType(e.target.value)}>
                <option value="both">Both</option>
                <option value="tyre">Tyre</option>
                <option value="rim">Rim</option>
              </select>
              <button onClick={() => handleAddEntity('brands')} className="bg-blue-600 text-white px-4 rounded">Add</button>
            </div>
            <ul className="space-y-2">
              {brands.map(b => (
                <li key={b.id} className="flex justify-between items-center p-3 hover:bg-gray-50 border rounded">
                  <span>{b.name} <span className="text-xs text-gray-500 ml-2 uppercase">({b.type})</span></span>
                  <button onClick={() => handleDeleteEntity('brands', b.id)} className="text-red-500 hover:bg-red-50 p-1 rounded"><Trash2 size={16} /></button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'diameters' && (
          <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">
            <div className="flex gap-2 mb-6">
              <input className="flex-1 p-2 border rounded" placeholder="Diameter (e.g. 26)" type="number" value={newItemName} onChange={e => setNewItemName(e.target.value)} />
              <button onClick={() => handleAddEntity('diameters')} className="bg-blue-600 text-white px-4 rounded">Add</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {diameters.map(d => (
                <div key={d.id} className="p-4 bg-gray-50 rounded flex justify-between items-center font-bold border hover:border-blue-200 transition-colors">
                  <span>{d.value}"</span>
                  <button onClick={() => handleDeleteEntity('diameters', d.id)} className="text-red-500 hover:bg-red-50 p-1 rounded">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

