import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{"Home"}</title>
        <link rel="icon" href="/r-alt.png" />
      </Head>
      <section className="w-full h-[768px] relative flex flex-row">
        <div className="w-1/3 h-full flex flex-col justify-center mx-auto bg-black">
          <p>sd</p>
        </div>
        <div className="w-2/3 h-full flex flex-col justify-center mx-auto bg-red-600">
        <p>sd</p>
        </div>
      </section>
    </Layout>
  );
}
