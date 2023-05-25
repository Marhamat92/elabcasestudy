import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  title?: string;
  children: React.ReactNode;
};

function Layout({ title, children }: Props) {
  return (
    <div>
      <Head>
        <title>{title ? title + "-E-LAB" : "E-LAB"}</title>
        <meta name='description' content='E-LAB' />
      </Head>

      <div className='flex flex-col min-h-screen justify-between'>
        <header>
          <Navbar />
        </header>
        <main className='mt-4 mb-4'>{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
