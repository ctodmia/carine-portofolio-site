import * as React from "react";
import "./index.scss";
import type { HeadFC, PageProps } from "gatsby";

import App from "./App";
import { SEO } from "../global/Seo";
import PageContextProvider, { PageContext } from "./PageContext";
  // Create a hook to use context
  export function usePage() {
    const context = React.useContext(PageContext);
    if (context === undefined) {
      console.warn("Context must be used within a Provider");
    }
    return context;
  }
  


const IndexPage: React.FC<PageProps> = () => {

  return (
    <PageContextProvider>
      <App />
    </PageContextProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (<SEO></SEO>);