import Link from "next/link";
import styles from "./BlogItem.module.scss";
import Image from "next/image";

export const BlogItem = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-fit mx-4 pb-12">
      <div className="md:w-1/2 w-full md:h-fit h-full justify-center flex">
        <Image
          src="temp.jpg"
          alt="blogItem"
          width={500}
          height={250}
        />
      </div>
      <div className="md:w-1/2 w-full flex flex-col text-left">
        <p className="text-3xl font-extrabold  font-lato pb-4">
          What doooooooooooooooooooooooo you mean? Oh, oh 
          When you nod your head yes, but you wanna say no
          What do you mean? Hey, yeah
        </p>
        <p className="text-xl font-bold font-lato pb-4">
          August 28, 2022
        </p>
        <p className="text-xl font-bold  font-lato pb-4">
          You&apos;re so indecisive of what I&apos;m sayin&apos;
          Tryna catch the beat, make up your heart
          Don&apos;t know if you&apos;re happy or complainin&apos;
          Don&apos;t want for us to end, where do I start?
        </p>
      </div>
    </div>
  );
};
