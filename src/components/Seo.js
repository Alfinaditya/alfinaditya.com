import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ title, description, image }) => {
  const { site } = useStaticQuery(query);
  const { pathname } = useLocation();
  const { defaultTitle, defaultDescription, siteUrl, defaultImage } =
    site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };
  console.log(seo);
  return (
    <div>
      <Helmet>
        {/* HTML Tags */}
        <title>{seo.title}</title>
        <meta name='description' content={seo.description} />

        {/* Google / Search Engine Tags */}
        <meta itemprop='name' content={seo.title} />
        <meta itemprop='description' content={seo.description} />
        <meta itemprop='image' content={seo.image} />

        {/* Facebook Meta Tags*/}
        <meta property='og:url' content={seo.title} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={seo.title} />
        <meta property='og:description' content={seo.description} />
        <meta property='og:image' content={seo.image} />

        {/* Twitter Meta Tags*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={seo.title} />
        <meta name='twitter:description' content={seo.description} />
        <meta name='twitter:image' content={seo.description} />
      </Helmet>
    </div>
  );
};

export default Seo;
Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
};
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;
