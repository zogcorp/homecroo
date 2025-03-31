import Image from "next/image";

const ImageShowcase = () => {
  return (
    <section className="py-10 relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Image */}
          <div className="flex-1 relative rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/2489225554/3357049171.jpeg"
              alt="Homecroo cleaning service"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded-lg"
              unoptimized
            />
          </div>

          {/* Text Overlay */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-sm self-center">
            <p className="text-gray-800 leading-relaxed">
              <span className="font-semibold">Empowering cleaning businesses</span> with expert solutions in software, sales, and marketing. Homecroo helps you grow and succeed by connecting you with exclusive opportunities, nurturing client relationships, and driving consistent results—all backed by our commitment to your success.
            </p>
          </div>

          {/* Side Image */}
          <div className="lg:w-1/3 xl:w-1/4 relative rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/2489225554/2524918329.jpeg"
              alt="Homecroo sales and marketing solutions"
              width={300}
              height={450}
              className="w-full h-full object-cover rounded-lg"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
