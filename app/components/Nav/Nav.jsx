"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";
import Switch from "../Switch/Switch";
import { ScrollLink } from "react-scroll";

export const Nav = () => {
  const [value, setValue] = useState(false);

  return (
    <nav className="min-h-[48px] py-8 w-full z-50 bg-dark font-sans border-black border-b-2 bg-white">
      <div className="flex flex-row justify-center items-center h-full container mx-auto md:px-24 px-8 lg:px-28 space-x-12">
        <div className={`${styles.navItem}`}>
          <Link legacyBehavior href="/">
            Home
          </Link>
        </div>

        <div className={`${styles.navItem}`}>
          <Link legacyBehavior href="#about-me" scroll={true}>
            About Me
          </Link>
        </div>

        <div className={`${styles.navItem}`}>
          <Link legacyBehavior href="/contact">
            Contact Me
          </Link>
        </div>
        <Switch isOn={value} handleToggle={() => setValue(!value)} />
      </div>
    </nav>
  );
};
