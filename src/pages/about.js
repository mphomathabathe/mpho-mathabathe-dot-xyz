import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

const About = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;

  return (
    <Layout title={siteMetadata.title}>
      <Seo
        title="About"
        keywords={[
          'blog',
          'javascript',
          'react',
          'serverless',
          'software development',
          'software engineer',
          'software engineering',
          'software engineer blog',
          'cloud',
          'devops',
          'aws',
        ]}
      />
      <h3>Greetings, I'm Mpho!</h3>
    <div>
      <section style={{ float: 'left', paddingRight: '1.25rem' }}>
        <GatsbyImage image={data.avatar.childImageSharp.gatsbyImageData} alt={siteMetadata.author} />
      </section>
      <p>
        My journey in the tech world has been diverse and enriching. I've delved into various domains, from SAP to Web Development and Design. The cloud has been my playground, and I've also ventured into the intricate realms of Data Science, Machine Learning, and Artificial Intelligence.
      </p>
      <p>
        While my heart still beats for coding, I've transitioned into a role that allows me to make a broader impact. I'm currently spearheading business development for Data Immigrant, a company I'm deeply passionate about.
      </p>
      <section style={{ float: 'right', paddingLeft: '1.25rem' }}>
        <GatsbyImage image={data.waterfall.childImageSharp.gatsbyImageData} alt="Mpho standing in front of a scenic view" />
      </section>
      <p>
        If you're curious about the twists and turns of my tech journey, you can delve deeper{' '}
        <a
          href="https://link-to-mphos-tech-journey.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>.
      </p>
      <p>
        As the tech landscape is ever-evolving, please note that some older content might contain outdated information and examples.
      </p>
      <p>
        The views and opinions expressed on this site are solely mine and do not reflect those of any organizations I'm affiliated with.
      </p>
    </div>
    </Layout>
  );
};

export const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 200)
      }
    }
    waterfall: file(absolutePath: { regex: "/waterfall.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 200)
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

export default About;
