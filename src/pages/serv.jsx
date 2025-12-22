// Service.jsx
import React from "react";

// Sample service data
const services = [
  {
    id: 1,
    title: "Bathtub Installation",
    description:
      "Expert installation of luxury bathtubs with precise fitting and elegant design.",
    image:
      "https://i.pinimg.com/736x/ec/3c/c0/ec3cc047a428fa025699d8a7657fd324.jpg",
  },
  {
    id: 2,
    title: "Smart Shower Setup",
    description:
      "Transform your bathroom with modern smart shower systems for convenience and style.",
    image:
      "https://i.pinimg.com/736x/90/0e/79/900e7967b4288a9d6018d37c1c1705a3.jpg",
  },
  {
    id: 3,
    title: "Luxury Sink Installation",
    description:
      "Upgrade your bathroom with premium sinks crafted from top-quality materials.",
    image:
      "https://i.pinimg.com/736x/83/2b/7b/832b7b25cc5287f3b215a1ea133803c1.jpg",
  },
  {
    id: 4,
    title: "Bathroom Lighting Design",
    description:
      "Professional lighting solutions to enhance mood and functionality.",
    image:
      "https://i.pinimg.com/736x/77/a6/49/77a649b2296d2854ac165168c515e63f.jpg",
  },
  {
    id: 5,
    title: "Luxury Towel & Storage Setup",
    description:
      "Organize your towels and bathroom essentials in style with elegant storage options.",
    image:
      "https://i.pinimg.com/736x/10/e1/95/10e195d6e25764aa5ad9c9f54732257c.jpg",
  },
];

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover sm:h-64 md:h-56 lg:h-60"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Check Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
