import Image from "next/image";
import Link from "next/link";

// News article type
type Article = {
  id: number;
  title: string;
  category: string;
  categoryLink: string;
  excerpt: string;
  image: string;
  link: string;
};

// Sample news articles data
const articles: Article[] = [
  {
    id: 1,
    title: "Discover the Transformative Power of Our Ultimate One-Time Cleaning Experience!",
    category: "Cleaning Services",
    categoryLink: "/category/cleaning-services",
    excerpt: "When life gets hectic and your home or office needs a thorough clean, a one time cleaning service from Homecroo...",
    image: "https://ext.same-assets.com/2489225554/3259575015.jpeg",
    link: "/discover-the-transformative-power-of-our-ultimate-one-time-cleaning-experience",
  },
  {
    id: 2,
    title: "Sydney Window Cleaning Services: Keep Your Windows Sparkling Clean with Homecroo",
    category: "Window Cleaning",
    categoryLink: "/category/window-cleaning",
    excerpt: "Sydney, known for its stunning architecture and vibrant lifestyle, deserves clean windows to match. Whether its the iconic skyline or...",
    image: "https://ext.same-assets.com/2489225554/1930079172.jpeg",
    link: "/sydney-window-cleaning-services-keep-your-windows-sparkling-clean-with-homecroo",
  },
  {
    id: 3,
    title: "Say Goodbye to Bed Bugs Forever: Your Ultimate Guide to a Peaceful, Pest-Free Home",
    category: "Cleaning Services",
    categoryLink: "/category/cleaning-services",
    excerpt: "Introduction Bed bugsare a pervasive and unsettling issue for many households. A person experiencing itching from bed bug bites. These...",
    image: "https://ext.same-assets.com/2489225554/2324732749.jpeg",
    link: "/say-goodbye-to-bed-bugs-forever-your-ultimate-guide-to-a-peaceful-pest-free-home",
  },
];

const LatestNews = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Latest News & Updates</h2>
          <div className="w-20 h-1 bg-white/30 mx-auto" />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              {/* Article Image */}
              <Link href={article.link} className="block relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </Link>

              {/* Article Content */}
              <div className="p-6">
                <Link href={article.link} className="block">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </Link>

                <Link href={article.categoryLink} className="inline-block text-sm text-primary mb-3 hover:underline">
                  {article.category}
                </Link>

                <p className="text-gray-600 text-sm mb-4">
                  {article.excerpt}
                </p>

                <Link
                  href={article.link}
                  className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
