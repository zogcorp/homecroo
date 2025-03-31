import Image from "next/image";

const Partners = () => {
  // Partner logos
  const partnerLogos = [
    {
      id: 1,
      name: "Meriton",
      image: "https://ext.same-assets.com/2489225554/221956902.png",
    },
    {
      id: 2,
      name: "Century 21",
      image: "https://ext.same-assets.com/2489225554/2475322182.png",
    },
    {
      id: 3,
      name: "Ray White",
      image: "https://ext.same-assets.com/2489225554/3436530320.png",
    },
    {
      id: 4,
      name: "LJ Hooker",
      image: "https://ext.same-assets.com/2489225554/3489069114.png",
    },
    {
      id: 5,
      name: "Professionals",
      image: "https://ext.same-assets.com/2489225554/1331534229.png",
    },
    {
      id: 6,
      name: "RateMyAgent",
      image: "https://ext.same-assets.com/2489225554/4135110306.png",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Trusted By</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We have worked with several cleaning businesses and Real Estate Agencies across Sydney. We've helped cleaning businesses get more bookings and more real estate network. Let's work together today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Partner Logos */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
              {partnerLogos.map((partner) => (
                <div key={partner.id} className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Cleaner Image */}
          <div className="hidden md:block mt-6 md:mt-0">
            <div className="relative h-full rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/2489225554/3727785868.jpeg"
                alt="Homecroo cleaner"
                width={400}
                height={500}
                className="w-full h-full object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
