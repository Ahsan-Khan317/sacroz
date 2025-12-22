// LocateUs.jsx
import React from "react";

const locations = [
  {
    id: 1,
    name: "Sacroz Exclusive Showroom",
    address: "6H/72, HIG COLONY, BHOOTHNATH, KANKARBAGH, PATNA 800026",
    mapLink: "https://www.google.com/maps/search/?api=1&query=6H/72,+HIG+COLONY,+BHOOTHNATH,+KANKARBAGH,+PATNA+800026",
  },
  {
    id: 2,
    name: "Corporate Office Address",
    address: "A-20, Sundar Nagar, Patel Marg, Mansarovar Jaipur -302020",
    mapLink: "https://www.google.com/maps/search/?api=1&query=A-20,+Sundar+Nagar,+Patel+Marg,+Mansarovar+Jaipur+302020",
  },
  {
    id: 3,
    name: "Sacroz Industries PVT. LTD.",
    address: "Plot No 76-D, Udyog Vihar, Phase-4, Gurgaon HR 122001",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Plot+No+76-D,+Udyog+Vihar,+Phase-4,+Gurgaon+HR+122001",
  },
];

const LocationCard = ({ name, address, mapLink }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
      <div>
        <h3 className="text-lg font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{address}</p>
      </div>
      <div className="mt-4">
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          View Location
        </a>
      </div>
    </div>
  );
};

const LocateUs = () => {
  return (
    <div>
      {/* Heading and Description */}
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white  mb-4">
          Locate Us
        </h1>
        <p className="text-gray-600 mb-10">
          Visit our showrooms and offices at multiple locations. We ensure our
          services are always nearby for your convenience.
        </p>
      </div>

      {/* Top Image */}
      <img
        src="https://i.pinimg.com/736x/e0/54/bd/e054bdcf455dbee8fef16b7a8d72b2e4.jpg"
        alt="Locate Us Banner"
        className="w-full h-64 sm:h-80 md:h-96 object-cover"
      />

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              name={location.name}
              address={location.address}
              mapLink={location.mapLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocateUs;
