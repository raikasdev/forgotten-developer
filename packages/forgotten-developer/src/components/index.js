import React, { useEffect } from "react";
import { Global, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import globalStyles from "./styles/global-styles";

import Header from "./header";
import List from "./list/list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Nav from "./nav";
import Footer from "./footer";

import "../assets/dracula-prism.min.css";
import "../assets/font.css";
import Page from "./page";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state, actions }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  useEffect(() => {
    if (navigator != null) {
      if (navigator.language || navigator.userLanguage) {
        const lang = navigator.language || navigator.userLanguage;
        if (!lang.includes("fi")) {
          if (state.router.link.endsWith('#reset-language')) {
            localStorage.removeItem('lang');
          }
          if (localStorage.getItem('lang') === 'fi' && state.router.link.startsWith('/en')) {
            actions.router.set("/");
          } else if (localStorage.getItem('lang') === 'en') {
            window.location = "https://en.raikas.dev";
          } else if (localStorage.getItem('lang') !== 'fi') {
            actions.router.set("/en");
          }
        }
      }
    }
  });

  return (
    <>
    {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="fi" />          
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>

      
      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles(state.theme.colors)} />

      {/* Main container of the site that contains everything in the page. */}
      <div id="container">

        {/* Add the header of the site. */}
        <Header />

        <div id="main">
          <Nav />
              {/* Add the content section. It renders a different component depending
                  on the type of URL we are in. */}
            <div id="content-container">
              <Switch>
                <Loading when={data.isFetching} />
                <List when={data.isArchive} />
                <Page when={data.isPage} />
                <Post when={data.isPostType} />
                <PageError when={data.isError} />
              </Switch>
            </div>
        </div>
        <div id="footer">
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default connect(Theme);
