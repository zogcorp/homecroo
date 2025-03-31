import Image from "next/image";
import Link from "next/link";

const Mission = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Mission Statement */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Empowering Cleaning Businesses to Scale with Software, Sales, and Marketing Solutions That Deliver Results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Image Column (hidden on small screens) */}
          <div className="hidden md:block relative rounded-lg overflow-hidden md:col-span-1">
            <Image
              src="https://ext.same-assets.com/2489225554/2413038527.jpeg"
              alt="sales and marketing services Homecroo"
              width={450}
              height={600}
              className="w-full h-full object-cover rounded-lg"
              unoptimized
            />
          </div>

          {/* Services Column */}
          <div className="md:col-span-1 lg:col-span-2 space-y-12">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="font-bold text-4xl text-primary mb-2 md:mb-0 md:mt-2">01</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Software</h3>
                <p className="text-gray-700 mb-4">Empower Your Business with the Right Tools</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="font-bold text-4xl text-primary mb-2 md:mb-0 md:mt-2">02</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales</h3>
                <p className="text-gray-700 mb-4">Dedicated Sales Support for Your Growth</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="font-bold text-4xl text-primary mb-2 md:mb-0 md:mt-2">03</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing</h3>
                <p className="text-gray-700 mb-4">Strategic Marketing That Drives Results</p>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <Link
                href="/about-homecroo"
                className="inline-flex items-center justify-center rounded-md border border-primary text-primary px-5 py-2 font-medium hover:bg-primary/5"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
