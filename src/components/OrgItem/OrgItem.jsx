import Link from "next/link";
import styles from "./OrgItem.module.scss";
import Image from "next/image";
import { FaTemperatureHigh } from "react-icons/fa";

export const OrgItem = ({ item }) => {
  return (
    <div className="flex flex-col w-32 h-auto mx-4">
      <div className="h-64">
        <div className="rounded-full overflow-hidden drop-shadow-xl mb-4">
          <Image
            layout="responsive"
            src={item.imageName === "" ? "temp.jpg" : item.imageName}
            alt="orgItem"
            width={150}
            height={150}
          />
          {/* "riley-transparent-cropped.png" */}
        </div>
      </div>
      <div className="w-full">
        <p className="text-3xl font-bold text-center font-lato pb-4">
          {item.title === "" ? "Default" : item.title}
        </p>
      </div>
    </div>
  );
};