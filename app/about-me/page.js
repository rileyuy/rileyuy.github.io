// import Navbar from "@/components/navbar";
import Image from "next/image";
export default function AboutPage() {
  return (
    <main>
      <div className=" mx-auto lg:px-72 py-12 md:py-0 flex flex-col justify-center">
        <h1 className="md:text-7xl text-4xl font-bold mb-8 text-black text-center">
          so a little about me...
        </h1>
        <Image
          src={`/riley_long.jpg`}
          //   alt={`${project?.title} Icon`}
          width={700}
          height={100}
          className="px-4 mb-8 self-center object-contain"
        />
        <div className="md:text-2xl text-lg px-4 lg:px-0 w-full">
          <p className="text-justify">
            I’m a{" "}
            <span className="font-bold">fullstack developer & designer </span>
            from the Philippines. I love building websites and software that has
            <span className="font-bold"> purpose and meaning.</span> It is my
            dream to build something one day and see it grow to something bigger
            than I would have never imagined.
            <br />
            <br />
            On my free time, I play a lot of sports like badminton, soccer and
            bouldering, play videos games (currently loving Marvel Rivals) and
            do a bit of photography here and there.
          </p>
        </div>
      </div>
      <footer className="py-6 text-center text-sm text-black font-extrabold w-full flex items-center justify-center bg-transparent absolute bottom-0">
        made with &lt;3 © 2025 Riley Uy
      </footer>
    </main>
  );
}
