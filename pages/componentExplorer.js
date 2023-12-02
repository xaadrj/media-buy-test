import React from "react";
import Layout from "../components/layout";
import Component from "../components/componentExplorer/index";
import Head from 'next/head'
function index() {
  return (
    <>
      <Head>
        <title>Figit - List of UI Elements| Free and Premium </title>
        <meta name="title" content="Figit - List of UI Elements| Free and Premium" />
        <meta name="description" content="Figit - A gallery of all the UI Elements in Figit both paid and free spread under different categories. 		" />
        <meta name="keywords" content="FFigma, Auto Layout, Figma Auto Layout, UI elements, Figma UI	" />
        <link rel="canonical" href="https://getfigit.com/pricing" />
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  );
}

export default index;
