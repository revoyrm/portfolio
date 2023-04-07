import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-950 from-40% to-blue-950 justify-around p-24">
      <h2 className="text-xl text-blue-300 font-bold">
        Hi, my name is Mackenzie Revoyr
      </h2>
      <p className="text-lg text-blue-100">
        I am a frontend ReactJS engineer! I have been in the industry since 2015
        and have experience with typescript, next.js, react-router-dom,
        tailwindCSS,{" "}
      </p>
    </main>
  );
}
