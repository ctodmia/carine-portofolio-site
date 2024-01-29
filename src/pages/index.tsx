import * as React from "react";
// import { BrowserRouter } from "react-router-dom";
import type { HeadFC, PageProps } from "gatsby";

import App from "./App";
import { SEO } from "../global/Seo";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <App />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (<SEO></SEO>);