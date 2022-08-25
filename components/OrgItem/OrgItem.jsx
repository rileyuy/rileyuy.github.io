import Link from "next/link";
import styles from "./OrgItem.module.scss";
import Image from "next/image";
import { FaTemperatureHigh } from "react-icons/fa";

export const OrgItem = ({ title, imageName }) => {
  return (
    <div className="flex flex-col justify-center w-64 h-full mx-4">
      <div className="">
        <div className="rounded-full overflow-hidden drop-shadow-xl mb-4">
          <Image
            layout="responsive"
            src={imageName === "" ? "temp.jpg" : imageName}
            alt="orgItem"
            width={150}
            height={150}
          />
          {/* "riley-transparent-cropped.png" */}
        </div>
      </div>
      <div className="w-full">
        <p className="text-3xl font-bold text-center font-lato pb-4">
          {title === "" ? "Default" : title}
        </p>
      </div>
    </div>
  );
};
