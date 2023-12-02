import React from "react";
import Layout from "../components/layout";
import Tutorial from "../components/tutorial/index";
import Head from "next/head";

function index() {
  return (
    <>
      <Head>
        <title>Figit - How to use Figit </title>
        <meta name="title" content="Figit - How to use Figit	" />
        <meta name="description" content="Figit - A complete guide to use Figit with the help of tutorials for better understanding of the plugin		" />
        <meta name="keywords" content="figma, Auto Layout, Figma Auto Layout, UI elements, Figma UI	" />
        <link rel="canonical" href="https://getfigit.com/pricing" />
      </Head>
      <Layout>
        <Tutorial />
      </Layout>
    </>
  );
}

export default index;
