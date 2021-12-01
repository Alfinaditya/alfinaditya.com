import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ title, description, image }) => {
  const { site } = useStaticQuery(query)
  const { pathname } = useLocation()
  const { defaultTitle, defaultDescription, siteUrl, defaultImage } =
    site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <div>
      <Helmet title={seo.title}>
        <meta name='description' content={seo.description} />
        <meta name='image' content={seo.image} />
        {seo.url && <meta property='og:url' content={seo.url} />}
        {seo.title && <meta property='og:title' content={seo.title} />}
        {seo.description && (
          <meta property='og:description' content={seo.description} />
        )}
        {seo.image && <meta property='og:image' content={seo.image} />}
      </Helmet>
    </div>
  )
}

export default Seo
Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}
Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
}
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
`
