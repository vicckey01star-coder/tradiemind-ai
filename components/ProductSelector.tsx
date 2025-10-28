
import React from 'react';
import { ProductType } from '../types';

interface ProductSelectorProps {
  selectedProduct: ProductType;
  onSelectProduct: (product: ProductType) => void;
}

export const ProductSelector: React.FC<ProductSelectorProps> = ({ selectedProduct, onSelectProduct }) => {
  const products = Object.values(ProductType);

  return (
    <div className="flex space-x-2 md:space-x-4 p-1 bg-brand-surface rounded-lg border border-brand-border max-w-max mx-auto">
      {products.map((product) => (
        <button
          key={product}
          onClick={() => onSelectProduct(product)}
          className={`px-3 py-2 md:px-5 md:py-2.5 text-sm md:text-base font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50 ${
            selectedProduct === product
              ? 'bg-brand-primary text-white shadow'
              : 'text-brand-secondary hover:bg-gray-700'
          }`}
        >
          {product}
        </button>
      ))}
    </div>
  );
};
