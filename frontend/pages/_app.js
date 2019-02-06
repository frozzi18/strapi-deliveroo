// Import CSS ans share a layout components accross all our pages

// This file will serve to override the default App.js used by Next 
// and be rendered on each page, allowing us to set global 
// styles/shared components in one place.
// https://nextjs.org/docs/#custom-app.

// This will allow us the ability to import a 
// <Head> component 
// and globally set the stylesheet inside the header.

/* _app.js */

/*

Step 1

*/

/*
import React from "react";
import App, { Container } from "next/app";

// Import head component from next.js
import Head from "next/head";

export default class MyApp extends App {

	// If promisses can add .then .then, async make it more elegent
	// await, wait that func to finish than continue
	// function() equal to ()=>
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
        </Head>

        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}
*/

/* /pages/_app.js */

/*
Before

import Layout from "../components/Layout";
import withData from "../lib/apollo";

import App, { Container } from "next/app";
import React from "react";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) { //what is ctx?
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, isAuthenticated, ctx } = this.props;
    return (
      <Container>
        <Layout isAuthenticated={isAuthenticated} {...pageProps}> 
          <Component {...pageProps} />
        </Layout>

        <style jsx global>
          {`
            a {
              color: white !important;
            }
            a:link {
              text-decoration: none !important;
              color: white !important;
            }
            a:hover {
              color: white;
            }
            .card {
              display: inline-block !important;
            }
            .card-columns {
              column-count: 3;
            }
          `}
        </style>
      </Container>
    );
  }
}
export default withData(MyApp);

*/

/* /pages/_app.js */

/*

Added for app provider

*/

import Layout from "../components/Layout";
import withData from "../lib/apollo";
import AppProvider from "../components/Context/AppProvider";
import defaultPage from "../hocs/defaultPage";
import { compose } from "recompose";
import App, { Container } from "next/app";
import React from "react";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, isAuthenticated, ctx } = this.props;
    return (
      <Container>
        <AppProvider>
          <Layout isAuthenticated={isAuthenticated} {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
        <style jsx global>
          {`
            a {
              color: white !important;
            }
            a:link {
              text-decoration: none !important;
              color: white !important;
            }
            a:hover {
              color: white;
            }
            .card {
              display: inline-block !important;
            }
            .card-columns {
              column-count: 3;
            }
          `}
        </style>
      </Container>
    );
  }
}
export default withData(MyApp);

