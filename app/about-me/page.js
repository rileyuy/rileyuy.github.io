// import Navbar from "@/components/navbar";
import Image from "next/image";
export default function AboutPage() {
  return (
    <main>
      <div className=" mx-auto lg:px-80 md:px-16 py-12 md:py-0 flex flex-col justify-center">
        <h1 className="md:text-7xl text-4xl font-bold mb-8 text-black text-center">
          so a little about me...
        </h1>
        <Image
          src={`/riley_long.jpg`}
          //   alt={`${project?.title} Icon`}
          width={700}
          height={100}
          className="px-4 mb-8 self-center object-contain"
          priority
        />
        <div className="md:text-xl text-lg px-4 lg:px-0 w-full">
          <p className="text-justify">
            I’m a{" "}
            <span className="font-bold">fullstack developer & designer </span>
            from the Philippines. I love building websites and software that
            have
            <span className="font-bold"> purpose and meaning.</span> It's my
            dream to build something one day and to see it grow into something
            that I would have never imagined.
            <br />
            <br />
            I've been writing code ever since I was in highschool and it was an
            unexpected skill I picked up through specialized classes in our
            curriculum. This was surprising even to me since I hated every other
            coding class I had prior which came in the form of coding an Arduino
            robot. But ever since then, I chose to pursue coding as something I
            wanted to learn and use in my future career which has been very fun
            and fulfilling.
            <br />
            <br />
            On my free time, I play a lot of sports like badminton, soccer and
            bouldering. I also play videos games (currently loving Marvel
            Rivals) and do a bit of photography here and there.
          </p>
        </div>

        <div className="w-full flex items-center justify-center my-8 h-[500px] flex-col md:flex-row gap-4">
          <Image
            src={`/badminton.JPG`}
            width={350}
            height={150}
            className="px-4 object-cover h-full"
            priority
          />

          <Image
            src={`/badminton1.JPG`}
            width={350}
            height={150}
            className="px-4 object-cover h-full"
            priority
          />
        </div>

        <div className="md:text-xl text-lg px-4 lg:px-0 w-full">
          <p className="text-justify">
            Badminton has always been my favorite sport since elementary and has
            been my go-to sport nowadays since it's the most accessible sport
            nowadays. It's become my outlet to have fun and meet with friends at
            the same time and it's the reason why I try to go and play every
            week.
          </p>
        </div>

        <div className="w-full flex items-center justify-center my-8 h-1/2 md:h-[180px] flex-col md:flex-row gap-4">
          <Image
            src={`/pokemon.jpg`}
            width={350}
            height={150}
            className="px-4 object-cover h-full"
            priority
          />
          <Image
            src={`/undertale.png`}
            width={350}
            height={150}
            className="px-4 object-cover h-full"
            priority
          />
        </div>

        <div className="md:text-xl text-lg px-4 lg:px-0 w-full">
          <p className="text-justify">
            To name some of my favorite games, Pokemon is definitely one of my
            all-time favorites, specifically, the Pokemon Mystery Dungeon
            series. I could go on all day about how good this game is but let's
            just say storywise, it has so much more substance compared to the
            mainline games. Undertale also has a special place in my heart, just
            the soundtrack of the game alone is something worth mentioning about
            this game; the characters, the story and the gameplay are all so
            perfect. If you're thinking of picking up a game, I highly suggest
            you give one of these games a try.
          </p>
        </div>
      </div>

      <footer className="py-6 text-center text-sm text-black font-extrabold w-full flex items-center justify-center bg-transparent absolute bottom-0">
        made with &lt;3 © 2025 Riley Uy | made using next.js and tailwind
      </footer>
    </main>
  );
}
