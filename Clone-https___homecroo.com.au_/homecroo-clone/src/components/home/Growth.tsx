import Image from "next/image";
import Link from "next/link";

const Growth = () => {
  return (
    <section className="py-16 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Don't Leave Your Growth to Chance
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Ready to grow your cleaning business? With Homecroo, you can streamline your operations, re-engage old clients, secure new leads from real estate professionals, and so much more!
            </p>
            <Link
              href="/marketplace"
              className="inline-flex items-center justify-center bg-primary text-white rounded-md px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              View Services
            </Link>
          </div>

          {/* Image */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/2489225554/3259575015.jpeg"
              alt="Business growth with Homecroo"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
