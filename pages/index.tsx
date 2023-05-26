import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import Slogan from "@/components/Slogan";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className='bg-white'>
      <Layout>
        <Intro />
        <Slogan />
        <AboutUs />
        <Services />
        <Blogs />
      </Layout>
    </div>
  );
}
