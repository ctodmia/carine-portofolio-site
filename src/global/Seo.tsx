import React from "react";
import { useSiteMetadata } from "../hooks/use-sitemap-metadata";

export const SEO = () => {
  const { title, description, image, siteUrl } = useSiteMetadata();

  const seo = {
    title: title,
    description: description,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <link id="icon" rel="icon" href="global-icon" />
      <meta
        name="description"
        content={seo.description}
      />
    </>
  );
};
