import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/site';

export const SEOHead = ({ title, description, canonical }) => {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — Free VLSI & Verilog Educational Platform`;
  const metaDescription = description || siteConfig.description;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={siteConfig.logo} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SEOHead;
