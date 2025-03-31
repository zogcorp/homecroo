import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ImageShowcase from "@/components/home/ImageShowcase";
import Mission from "@/components/home/Mission";
import Growth from "@/components/home/Growth";
import LatestNews from "@/components/home/LatestNews";
import Partners from "@/components/home/Partners";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImageShowcase />
        <Mission />
        <Growth />
        <LatestNews />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
