import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
        />
        <Bio />
        {posts.map(({ node }, index) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    color: '#26B3A0',
                  }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small style={{ fontWeight: `bold` }}>
                {node.frontmatter.date}
              </small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <Img
                imgStyle={{
                  borderRadius: `10px`,
                }}
                style={{
                  marginBottom: `4rem`,
                }}
                sizes={node.frontmatter.heroImage.childImageSharp.sizes}
              />
              {index !== posts.length - 1 && (
                <hr style={{ background: `#eee` }} />
              )}
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            heroImage {
              childImageSharp {
                sizes(maxWidth: 630, maxHeight: 400) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
