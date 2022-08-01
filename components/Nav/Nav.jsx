import Link from "next/link";
import styles from "./Nav.module.scss";

export const Nav = () => {
    return (
        <nav className="min-h-[48px] py-4 relative w-full z-50 bg-black">
            <div className="flex flex-row justify-between items-center h-full container mx-auto px-1">
                <h1 className="text-2xl md:text-3xl font-goldleaf text-white">
                    <Link href="/">
                        <a className="">
                            historia

                        </a>
                    </Link>
                </h1>
                <div className="flex flex-row space-x-4 md:space-x-8 text-xs md:text-base">
                    <div className={`${styles.navItem}`}>
                        <Link href="/">
                            <a className="nav-item text-white opacity-80 hover:opacity-100">Overview</a>
                        </Link>
                    </div>
                    
                    <Link href="/aboutus">
                        <a className="nav-item text-white opacity-80 hover:opacity-100">About</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
