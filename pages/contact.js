import React from "react";
import Layout from "../components/layout";
import Pricing from "../components/contact/index";
import Head from "next/head";

function index() {
  return (
    <>
     <Head>
                <title>
                Yuri – Facebook automated ad delivery system
                </title>
                <meta
                    name="title"
                    content="Yuri – Facebook automated ad delivery system"
                />
                <meta
                    name="description"
                    content="Yuri – Facebook automated ad delivery system"
                />
                <meta
                    name="keywords"
                    content="Yuri – Facebook automated ad delivery system"
                />
                <link rel="canonical" href="https://getfigit.com/contact" />
            </Head>
      <Layout>
        <Pricing />
      </Layout>
    </>
  );
}

export default index;
