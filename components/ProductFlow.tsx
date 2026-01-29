"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  type: "rim" | "tyre";
  brand: { name: string } | null;
  diameter: { value: number } | null;
  rimWidth?: string;
  tireProfile?: string;
  price: number;
  description: string;
  imageUrl?: string;
}

interface Brand { id: string; name: string; type: string }
interface Diameter { id: string; value: number; }

const ProductFlow = () => {
  // Steps: 
  // 0: Select Diameter (Grid of inch sizes)
  // 1: Filtering (Tabs for Rims / Tires) -> Lists products.

  const [selectedDiameter, setSelectedDiameter] = useState<number | null>(null);
  const [activeTypeTab, setActiveTypeTab] = useState<'tyre' | 'rim'>('tyre');

  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [diameters, setDiameters] = useState<Diameter[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [prodRes, brandRes, diaRes] = await Promise.all([
          fetch("/api/products"),
          fetch("/api/brands"),
          fetch("/api/diameters")
        ]);

        if (prodRes.ok) setProducts(await prodRes.json());
        if (brandRes.ok) setBrands(await brandRes.json());
        if (diaRes.ok) setDiameters(await diaRes.json());
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDiameterSelect = (dVal: number) => {
    setSelectedDiameter(dVal);
    setActiveTypeTab('tyre'); // Default to tyre? or let user pick.
  };

  const currentProducts = products.filter(p => {
    if (!selectedDiameter) return false;
    if (p.diameter?.value !== selectedDiameter) return false;
    if (p.type !== activeTypeTab) return false;
    return true;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your <span className="text-primary-600">Perfect Fit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select your wheel diameter to see available tires and rims.
          </p>
        </motion.div>

        {!selectedDiameter ? (
          /* Diameter Selection Grid */
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {diameters.map(d => (
              <motion.button
                key={d.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDiameterSelect(d.value)}
                className="aspect-square bg-white rounded-xl shadow border-2 border-transparent hover:border-blue-600 flex flex-col items-center justify-center transition-all"
              >
                <span className="text-4xl font-bold text-gray-900">{d.value}"</span>
                <span className="text-gray-500 text-sm mt-1">Inch</span>
              </motion.button>
            ))}
          </div>
        ) : (
          /* Product List View */
          <div className="animate-fade-in">
            <button
              onClick={() => setSelectedDiameter(null)}
              className="mb-8 flex items-center text-blue-600 hover:underline"
            >
              &larr; Back to Sizes
            </button>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">{selectedDiameter} Inch Collection</h3>

            {/* Type Tabs */}
            <div className="flex gap-4 mb-8 border-b">
              <button
                onClick={() => setActiveTypeTab('tyre')}
                className={`px-6 py-3 font-bold text-lg border-b-2 transition-colors ${activeTypeTab === 'tyre' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500'}`}
              >
                Tires
              </button>
              <button
                onClick={() => setActiveTypeTab('rim')}
                className={`px-6 py-3 font-bold text-lg border-b-2 transition-colors ${activeTypeTab === 'rim' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500'}`}
              >
                Rims
              </button>
            </div>

            {/* Products Grid */}
            {loading ? <p>Loading...</p> : (
              currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {currentProducts.map(p => (
                    <div key={p.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-all">
                      <div className="aspect-square bg-gray-200 overflow-hidden">
                        {p.imageUrl ? (
                          <img src={p.imageUrl} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg">{p.name}</h4>
                        <p className="text-sm text-gray-500">{p.brand?.name}</p>
                        <div className="my-2">
                          {p.type === 'rim' && <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Width: {p.rimWidth}</span>}
                          {p.type === 'tyre' && <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Profile: {p.tireProfile}</span>}
                        </div>
                        <p className="text-xl font-bold text-blue-600">Rs. {p.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center bg-gray-50 rounded-lg">
                  <p className="text-gray-500 text-lg">No {activeTypeTab === 'tyre' ? 'tires' : 'rims'} found for {selectedDiameter} inch.</p>
                </div>
              )
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductFlow;
