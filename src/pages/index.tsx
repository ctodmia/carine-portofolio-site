import * as React from "react";
import "./index.scss";
import type { HeadFC, PageProps } from "gatsby";

import App from "./App";
import { SEO } from "../global/Seo";
import PageContextProvider from "./PageContext";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageContextProvider>
      <App />
    </PageContextProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (<SEO></SEO>);