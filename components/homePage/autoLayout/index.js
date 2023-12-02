import React, { useState } from "react";

function index() {
  const [pluginLink, setPluginLink] = useState("");
  const [showPlugin, setShowPlugin] = useState(false);

  const loadFigmaPlugin = () => {
    console.log("load figma plugin");
    setShowPlugin(true);
    setPluginLink("https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FF5HS0ZOXcMGdmHC7Ntp9UE%2FFigit-Protos%3Fpage-id%3D0%253A1%26node-id%3D175%253A15223%26viewport%3D356%252C48%252C0.58%26scaling%3Dscale-down%26starting-point-node-id%3D175%253A15223%26hide-ui%3D1");
  };
  return (
    <>
      <section className="xl:block hidden xl:mt-[128px] mt-[96px] 2xl:px-4 xl:px-10 px-4">
        <section className="xl:block hidden ">
          <div className="hidden xl:block pb-14 w-full">
            <div className={"w-full cursor-pointer justify-center " + (showPlugin ? "hidden" : "flex")} onClick={loadFigmaPlugin}>
              <img src="/images/figma_home_page.webp" alt="Figma Home page" />
            </div>

            <iframe className={showPlugin ? "block" : "hidden"} width="100%" height="1000px" src={pluginLink} allowFullScreen></iframe>
          </div>
        </section>
      </section>
    </>
  );
}

export default index;
