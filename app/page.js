import HeroSection from "./components/HeroSection/Hero";
import PhotoStack from "./components/PhotoStack/PhotoStack";

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
      <footer className="py-6 text-center text-sm text-black font-extrabold w-full flex items-center justify-center bg-transparent absolute bottom-0">
        made with &lt;3 © 2025 Riley Uy
      </footer>
    </main>
  );
}
