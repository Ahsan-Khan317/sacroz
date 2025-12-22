import { Link } from "react-router-dom";
const CatalogueDetails = () => {
  const catalogues = [
    {
      title: "Mobile Catalogue",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      link: "https://www.sacrozindustries.com/Project/Mobile%20catalogue.pdf",
    },
    {
      title: "Sacroz Sanitary",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
      link: "https://www.sacrozindustries.com/Project/Sacroz%20Sanitary%201.pdf",
    },
    {
      title: "Premium Bathware Collection",
      image:
        "https://buildingandinteriors.com/wp-content/uploads/2023/08/VB_HOMMAGE_2019_3103web-1.jpg",
      link: "https://www.sacrozindustries.com/Project/pdf/catalogue%20for%20sanitary%20ware%20600%20dpi%2014-09-2023.pdf",
    },
    {
      title: "Luxury PVD Faucets",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101",
      link: "https://www.sacrozindustries.com/Project/pdf/Luxury%20PVD%20Faucets.pdf",
    },
  ];

  return (
    <section className="w-full px-0.5 md:px-10 py-14 ">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-gray-800">
          Catalogue Details
        </h2>
        <div className="w-20 h-1 bg-black mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {catalogues.map((item, index) => (
          <div
            key={index}
            className="relative h-70 md:h-80 rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <Link
                to={item.link}
                className="w-max bg-white text-black px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
              >
                View Catalogue
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CatalogueDetails;
