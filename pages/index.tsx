import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className='bg-white'>
      <Layout>
        <h1>body</h1>
      </Layout>
    </div>
  );
}
