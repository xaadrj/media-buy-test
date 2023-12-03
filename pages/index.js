import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import HomePage from "../components/homePage/index";
import Head from "next/head";
function index() {
 

  return (
    <>
      <Head>
        <title>Yuri – Facebook automated ad delivery system</title>
        <meta name="title" content="Yuri – Facebook automated ad delivery system" />
        <meta
          name="description"
          content="Yuri – Facebook automated ad delivery system"
        />
        <meta name="keywords" content="Yuri – Facebook automated ad delivery system" />
        <link rel="canonical" href="https://getfigit.com/" />
      </Head>
    
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default index;
