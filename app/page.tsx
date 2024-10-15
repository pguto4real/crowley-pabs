import Hero from "@/components/Hero";
import { Nav } from "@/components/Nav";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crowley Paint And Body Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Nav/>
          <Hero/>
        </div>
      </main>
    </>
  );
}
