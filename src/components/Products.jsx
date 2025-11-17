import React from 'react';
import { products } from '../components/Mockdata';
import { Gauge, Mountain, Package, ArrowRight } from 'lucide-react';

const Products = () => {
  const getIcon = (category) => {
    switch(category) {
      case 'Surveillance':
        return <Gauge size={24} />;
      case 'Tactical Operations':
        return <ArrowRight size={24} />;
      case 'Reconnaissance':
        return <Mountain size={24} />;
      case 'Heavy-Lift Cargo':
        return <Package size={24} />;
      default:
        return <Gauge size={24} />;
    }
  };

  return (
    <section id="products" className="py-25 px-[7.6923%] bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-15">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Our UAV Systems</h2>
          <div className="w-20 h-1 bg-[#ff7b00] mb-6"></div>
          <p className="text-lg text-white/70 mb-15 max-w-[600px]">Mission-critical platforms engineered for operational excellence</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white/3 border border-white/10 rounded-none overflow-hidden transition-all duration-400 hover:border-[#ff7b00]/50 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(255,123,0,0.2)]"
            >
              <div className="relative h-[300px] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
                />
                <div className="absolute top-5 right-5 bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-none flex items-center gap-2 text-[#ff7b00] text-sm font-medium">
                  {getIcon(product.category)}
                  <span>{product.category}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-[28px] font-bold text-white mb-4">{product.name}</h3>
                <p className="text-base leading-relaxed text-white/70 mb-6">{product.description}</p>
                <div className="grid grid-cols-3 gap-5 pt-6 border-t border-white/10">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wider text-white/50 font-semibold">Range</span>
                    <span className="text-lg font-semibold text-[#ff7b00]">{product.specs.range}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wider text-white/50 font-semibold">Altitude</span>
                    <span className="text-lg font-semibold text-[#ff7b00]">{product.specs.altitude}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wider text-white/50 font-semibold">Payload</span>
                    <span className="text-lg font-semibold text-[#ff7b00]">{product.specs.payload}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;