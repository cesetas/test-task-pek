import Image from "next/image";
import { Inter } from "next/font/google";
import MainForm from "../components/MainForm";
import RecordedVins from "../components/RecordedVins";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-gradient-to-b from-slate-800 from-20% via-yellow-500 via-70% to-slate-900 to-90%  flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <Header />
      <MainForm />
      <RecordedVins />
      <Footer />
    </main>
  );
}
