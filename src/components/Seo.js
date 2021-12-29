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
      <Helmet title={seo.title}>
        {seo.title && <meta property='og:site_name' content={seo.title} />}
        <link rel='canonical' href='https://discasalon.com/' />
        <meta name='keywords' content='Website Alfin Aditya' />
        <meta property='og:type' content='website' />
        {seo.image && <meta name='image' content={seo.image} />}
        {seo.image && <meta name='twitter:image' content={seo.image} />}
        {seo.image && <meta property='og:image' content={seo.image} />}
        {seo.title && <meta name='twitter:title' content={seo.title} />}
        {seo.title && <meta property='og:title' content={seo.title} />}
        {seo.description && (
          <meta name='description' content={seo.description} />
        )}
        {seo.description && (
          <meta property='og:description' content={seo.description} />
        )}
        {seo.description && (
          <meta name='twitter:description' content={seo.description} />
        )}
        {seo.url && <meta name='twitter:url' content={seo.url} />}
        {seo.url && <meta property='og:url' content={seo.url} />}
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
