import React from "react";
import Layout from "../components/layout";
import Pricing from "../components/pricing/index";
import Head from "next/head";

function index() {
  return (
    <>
     <Head>
                <title>
                    Figit - Pricing Plan | Subscription or Lifetime access
                </title>
                <meta
                    name="title"
                    content="Figit - Pricing Plan | Subscription or Lifetime access"
                />
                <meta
                    name="description"
                    content="Figit - pricing plans for both monthly subscription and lifetime access to 1000+ Figma auto-layout UI elements"
                />
                <meta
                    name="keywords"
                    content="Figma, Auto Layout, Figma Auto Layout, UI elements, Figma UI"
                />
                <link rel="canonical" href="https://getfigit.com/pricing" />
            </Head>
      <Layout>
        <Pricing />
      </Layout>
    </>
  );
}

export default index;
