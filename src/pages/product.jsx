import React, { useState } from 'react';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Fake product data for a bathtub
  const product = {
    name: "Luxury Acrylic Bathtub with Whirlpool",
    code: "BT-LX-AC-WP-2024",
    range: "Luxury Bath Tubs",
    description: "Premium acrylic bathtub with integrated whirlpool system, LED lighting, and ergonomic design for ultimate relaxation.",
    price: 125000,
    mrp: 145000,
    discount: 14,
    sku: "ZPS-BT-LX2024",
    rating: 4.8,
    reviewCount: 47,
    tags: ["bathtub", "whirlpool", "luxury", "acrylic", "spa"],
    specifications: {
      material: "High-gloss acrylic",
      dimensions: "1700mm x 800mm x 600mm",
      capacity: "350 liters",
      weight: "85 kg",
      color: "Pearl White",
      warranty: "5 years"
    }
  };

  // Product images (using live Unsplash images for bathtubs)
  const productImages = [
  
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
  ];

  // Recently viewed products
  const recentlyViewed = [
    {
      id: 1,
      name: "Steel Bathtub",
      code: "BT-ST-2024",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹ 85,000"
    },
    {
      id: 2,
      name: "Corner Bathtub",
      code: "BT-CR-2024",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹ 95,000"
    },
    {
      id: 3,
      name: "Freestanding Bathtub",
      code: "BT-FS-2024",
      image: "https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹ 110,000"
    },
    {
      id: 4,
      name: "Drop-in Bathtub",
      code: "BT-DI-2024",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹ 75,000"
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleQuantityChange = (value) => {
    if (value >= 1 && value <= 99) {
      setQuantity(value);
    }
  };

  const handleBuyNow = () => {
    alert(`Added ${quantity} item(s) to cart. Total: ${formatPrice(product.price * quantity)}`);
    // In a real app, this would redirect to checkout or add to cart
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Main Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Images */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img 
                  src={productImages[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg shadow-md overflow-hidden border-2 ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}
                >
                  <img 
                    src={img} 
                    alt={`View ${index + 1}`}
                    className="w-full h-20 object-cover hover:opacity-90 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Product Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            {/* Product Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="w-32 text-gray-600">Range</span>
                <span className="text-gray-900 font-medium">{product.range}</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-gray-600">Code</span>
                <span className="text-gray-900 font-medium">{product.code}</span>
              </div>
              <div className="flex items-start">
                <span className="w-32 text-gray-600">Description</span>
                <span className="text-gray-900 flex-1">{product.description}</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-600 ml-2">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price Section */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-lg text-gray-600">MRP</span>
                <span className="text-3xl font-bold text-gray-900 ml-3">
                  {formatPrice(product.price)}
                </span>
                {product.mrp > product.price && (
                  <span className="text-lg text-gray-500 line-through ml-3">
                    {formatPrice(product.mrp)}
                  </span>
                )}
              </div>
              <p className="text-green-600 font-medium">
                Inclusive of all taxes • Free shipping
              </p>
              {product.discount > 0 && (
                <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium mt-2">
                  Save {formatPrice(product.mrp - product.price)}
                </div>
              )}
            </div>

            {/* Specifications */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Specifications</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex">
                    <span className="text-gray-600 capitalize">{key}:</span>
                    <span className="ml-2 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity & Buy Button */}
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    min="1"
                    max="99"
                    className="w-16 text-center border-0 focus:ring-0"
                  />
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Buy Now
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Product Tags</h4>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Built-in whirlpool jets for massage therapy
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Energy-efficient LED lighting
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Anti-slip surface for safety
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Easy-to-clean acrylic surface
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="border-t pt-6">
              <strong className="text-gray-900">Disclaimer:</strong>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Jaquar reserves the right at its sole discretion, to change/modify/alter any product specification at any time without notice.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  The prices are subject to change without notice and those ruling at the time of supply will be charged.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Colours & sizes of product images shown may vary in reality.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recently Viewed Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recently viewed products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recentlyViewed.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                  <div className="text-sm text-gray-600 mb-2">Code: {item.code}</div>
                  <div className="text-lg font-bold text-gray-900">{item.price}</div>
                  <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Tags */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Related Categories</h2>
          <div className="flex flex-wrap gap-3">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full transition-colors">
              Bathtubs <span className="text-gray-500">(24)</span>
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full transition-colors">
              Whirlpool <span className="text-gray-500">(12)</span>
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full transition-colors">
              Luxury Bath <span className="text-gray-500">(8)</span>
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full transition-colors">
              Acrylic <span className="text-gray-500">(15)</span>
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full transition-colors">
              Spa <span className="text-gray-500">(6)</span>
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full transition-colors">
              Bath Accessories <span className="text-gray-500">(42)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;