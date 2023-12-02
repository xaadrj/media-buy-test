import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import HomePage from "../components/homePage/index";
import Head from "next/head";
function index() {
 

  return (
    <>
      <Head>
        <title>Figit - Figma plugin with 1000+ auto layout UI elements</title>
        <meta name="title" content="Figit - Figma plugin with 1000+ auto layout UI elements" />
        <meta
          name="description"
          content="Figit - figma plugin with 1000+ auto layout UI elements with a 
                    unified design system that supercharges your design workflow."
        />
        <meta name="keywords" content="Figma, Auto Layout, Figma Auto Layout, UI elements, Figma UI" />
        <link rel="canonical" href="https://getfigit.com/" />
      </Head>
    
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default index;
