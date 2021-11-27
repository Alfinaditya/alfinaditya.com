const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const projectDetailsTemplate = path.resolve(
    'src/templates/project-details.js'
  );
  const blogDetailsTemplate = path.resolve('src/templates/blog-details.js');
  const { data: projects } = await graphql(`
    query PROJECT_DETAILS {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "projects" } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  const { data: blogs } = await graphql(`
    query BLOG_DETAILS {
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "blog" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  projects.allMarkdownRemark.nodes.forEach(project => {
    actions.createPage({
      path: `/project/${project.frontmatter.slug}`,
      component: projectDetailsTemplate,
      context: { slug: project.frontmatter.slug },
    });
  });
  blogs.allMarkdownRemark.nodes.forEach(blog => {
    actions.createPage({
      path: `/blog/${blog.frontmatter.slug}`,
      component: blogDetailsTemplate,
      context: { slug: blog.frontmatter.slug },
    });
  });
};
