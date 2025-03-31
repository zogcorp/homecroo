import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 text-center">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          {/* Rating badge */}
          <Link
            href="http://search.google.com/local/reviews?placeid=ChIJXfXiT7XmVk4RzCmtln0tCrI"
            className="inline-flex items-center text-sm bg-gray-100 rounded-md px-3 py-1.5 mb-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-bold mr-2">EXCELLENT</span>
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" className="mx-0.5">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <Image
              src="https://ext.same-assets.com/2489225554/2927741880.svg"
              alt="Google"
              width={16}
              height={16}
              className="ml-1 h-4 w-auto"
            />
          </Link>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 max-w-4xl">
            We can help you operate a profitable cleaning business with proven admin tools & solutions
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-700 max-w-3xl mb-10">
            We can save you time, effort & costs and transform your cleaning business with innovative management and admin tools tailored to help you scale, succeed and operate a profitable business.
          </p>

          {/* CTA Button */}
          <Link
            href="/marketplace"
            className="bg-primary text-white rounded-md px-6 py-3 font-medium hover:bg-primary/90 transition-colors text-lg"
          >
            View Our Support Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
