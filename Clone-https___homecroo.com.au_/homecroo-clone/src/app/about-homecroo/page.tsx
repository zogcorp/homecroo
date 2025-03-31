import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-16 pb-10 text-center">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
              About Homecroo
            </h1>
            <div className="w-20 h-1 bg-primary/20 mx-auto mb-12" />
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-10 text-center">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-16">
              Empowering Cleaning Businesses to Scale with Software, Sales, and Marketing Solutions That Deliver Results.
            </h2>
          </div>
        </section>

        {/* About Us Content */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">About Us</h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  At Homecroo, we're passionate about helping cleaning businesses thrive. What began as a local cleaning service has now evolved into a dynamic platform dedicated to supporting cleaning business owners with the tools, services, and resources they need to succeed in a competitive industry.
                </p>

                <p>
                  We understand the challenges cleaning businesses face—whether it's finding reliable staff, building a consistent customer base, or managing day-to-day operations. That's why we've developed innovative solutions that include software, sales and marketing services, and labour hire options, all tailored specifically for cleaning businesses.
                </p>

                <p>
                  Our mission is to empower cleaning business owners to focus on what they do best—delivering exceptional service—while we handle the rest. From connecting you with real estate agents and property managers to reigniting relationships with past clients, we're here to drive growth and streamline your operations.
                </p>

                <p>
                  With Homecroo, you gain a trusted partner committed to your success. Let's build a future where your cleaning business thrives!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-12">
          <div className="container-custom">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/2489225554/798826542.jpeg"
                alt="Homecroo cleaning service"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
