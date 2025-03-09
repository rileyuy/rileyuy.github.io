import HeroSection from "./components/HeroSection/Hero";
import PhotoStack from "./components/PhotoStack/PhotoStack";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <div className=" md:px-12 lg:px-72 px-4 pb-16">
        <div className="flex md:flex-row flex-col-reverse gap-12 items-center">
          <div className="md:w-1/2 w-full">
            <HeroSection />
          </div>

          <div className="flex justify-center  md:w-1/2 w-full ">
            <PhotoStack />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
