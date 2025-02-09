import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";

const Page = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  // Get the theme color.
  const { themeColor } = state.theme.colors;

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();

    if (document.getElementById('english')) {
      document.getElementById('english').onclick = () => localStorage.setItem('lang', 'en')
      document.getElementById('finnish').onclick = () => localStorage.setItem('lang', 'fi')
    }
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <>
      <Container>
        <div>
          <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </div>

      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content color={themeColor}>
        <Html2React html={post.content.rendered} />
      </Content>
    </Container>
    </>
  ) : null;
};

export default connect(Page);

const Container = styled.div``;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  word-break: break-word;
  font-size: 18px !important;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
    text-align: justify;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.4);
    border-left: 4px solid ${(props) => props.color};
    padding: 4px 16px;
    box-shadow: 1px 1px 0.5em black inset;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }

  /* code block styles */

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: rgba(40, 41, 54, 1);
    border-radius: .75em;
    border: .3em solid hsl(0, 0%, 33%);
    box-shadow: 1px 1px 0.5em black inset;
  }

  pre[class*="language-"] {
    background: hsl(0, 0%, 8%) !important;
  }

  code[class*="language-"], pre[class*="language-"] {
    background: hsl(0, 0%, 8%) !important;
  }

  pre::-webkit-scrollbar-thumb {
    background-color: #0c0;
    border-radius: 15px;
  }

  pre::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.color};
    border-radius: 15px;
  } 

  pre::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 15px;
  }

  /* table styles */

  .tablepress, .wp-block-table {
    text-align: left;
    min-width: 60%;
    max-width: 80%;
    margin: 0 auto;
    display: table;
    padding: 1em 5px 1em 5px;
  }

  td {
    font-weight: normal;
    font-size: 1em;
    -webkit-box-shadow: 0 2px 2px -2px #0E1119;
    -moz-box-shadow: 0 2px 2px -2px #0E1119;
    box-shadow: 0 2px 2px -2px #0E1119;
  }
  
  td,
  th {
    padding-bottom: 2%;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
  }
  
  /* Background-color of the odd rows */
  tr:nth-of-type(odd) {
    background-color: #323C50;
  }
  
  /* Background-color of the even rows */
  tr:nth-of-type(even) {
    background-color: #2C3446;
  }
  
  th {
    background-color: #1F2739;
  }
  
  td:first-of-type {
    color: ${(props) => props.color};
  }
  
  tr:hover {
    background-color: #464A52;
    -webkit-box-shadow: 0 6px 6px -6px #0E1119;
    -moz-box-shadow: 0 6px 6px -6px #0E1119;
    box-shadow: 0 6px 6px -6px #0E1119;
  }
  
  td:hover {
    background-color: ${(props) => props.color};
    color: #000;
    font-weight: bold;
    box-shadow: #000 -1px 1px, #000 -2px 2px, #000 -3px 3px, #000 -4px 4px, #000 -5px 5px, #000 -6px 6px;
    transform: translate3d(6px,-6px,0);
    transition-delay: 0s;
    transition-duration: .4s;
    transition-property: all;
    transition-timing-function: line;
  }

`;

const Title = styled.h2``;