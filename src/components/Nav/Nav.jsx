import Link from "next/link";
import styles from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className="min-h-[48px] py-4 absolute w-full z-50 bg-dark">
      <div className="flex flex-row justify-between items-center h-full container mx-auto md:px-24 px-8 lg:px-32">
        <h1 className={`${styles.title} text-3xl md:text-4xl  text-white`}>
          <span></span>
        </h1>
        <div className="md:flex hidden flex-row space-x-4 md:space-x-8 text-xs md:text-base">
          <div className={`${styles.navItem}`}>
            <Link href="/">
              <a className="nav-item text-white opacity-80 hover:opacity-100">
                About
              </a>
            </Link>
          </div>

          <div className={`${styles.navItem}`}>
            <Link href="/blog">
              <a className="nav-item text-white opacity-80 hover:opacity-100">
                Blog
              </a>
            </Link>
          </div>

          <div className={`${styles.navItem}`}>
            <Link href="/contact">
              <a className="nav-item text-white opacity-80 hover:opacity-100">
                Contact Me
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
