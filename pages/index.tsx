import { NextPage } from 'next';
import Head from 'next/head'
import { Navbar } from '../components/nav-bar/nav-bar';

const Home: NextPage = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700,900');
      @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,900');
      
      
      *, *:after, *:before {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-user-select: none;  /* Chrome all / Safari all */
          -moz-user-select: none;     /* Firefox all */
          -ms-user-select: none;      /* IE 10+ */
          user-select: none; 
      }
      
      .group:after {
        content: "";
        display: table;
        clear: both;
      }
      
      body {
          line-height: 1.6;
          margin: 0;
          font-family: 'Roboto', sans-serif;
          color: #EAECEE;
          /* -webkit-user-select: none; */
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
      }
      
      .center {
          text-align: center;
      }
      
      p {
          margin: 0;
      }
      
      h1 {
          margin: 0;
          font-weight: 900;
          font-family: 'Poppins', sans-serif;
      }
      
      h2 {
          margin-top: 0;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
      }
      
      h3 {
          margin: 0;
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
      }
      
      ul {
          padding: 0;
          list-style-type: none;
      }
      
      li {
          list-style-type: none;
      }
      
      
      a {
          text-decoration: none;
          color: #EAECEE;;
      }
      
      .cursor-pointer {
          cursor: pointer;
      }
      
      .strong {
          font-weight: 700;
      }
      
      .title-bar {
          width: 50px;
          height: 4px;
          background-color: #70c9c5;
          margin-bottom: 24px;
      }
      
      .width-100 {
          width: 100%
      }
      
      .justify-content-center {
          justify-content: center;
      }
      
      .display-flex {
          display: flex;
      }
      
      .flex-column {
          flex-direction: column;
      }
      
      .flex-row {
          flex-direction: row;
      }
      
      .mb-16 {
          margin-bottom: 16px;
      }
      
      .wrapper {
          position: relative;
          margin: 0 auto;
          max-width: 720px;
          padding-bottom: 70px;
      }
      
      .yellow-color {
          color: #dcdc1d;
      }
      
      .blue-color {
          color: #6fc9c6;
      }
      
      .blue-color-bg {
          background-color: #70c9c5;
      }
      
      @media only screen and (min-width: 600px) {
          /* For tablets: */
          .col-m-1 {width: 8.33%;}
          .col-m-2 {width: 16.66%;}
          .col-m-3 {width: 25%;}
          .col-m-4 {width: 33.33%;}
          .col-m-5 {width: 41.66%;}
          .col-m-6 {width: 50%;}
          .col-m-7 {width: 58.33%;}
          .col-m-8 {width: 66.66%;}
          .col-m-9 {width: 75%;}
          .col-m-10 {width: 83.33%;}
          .col-m-11 {width: 91.66%;}
          .col-m-12 {width: 100%;}
      }
      
      @media only screen and (min-width: 768px) {
          html {
              font-size: 16px;
          }
          h1 {
              /* 40px; */
              font-size: 2.5rem;
          }
          h2 {
              /* 36px; */
              font-size: 2.250rem; 
          }
          h3 {
              /* 32px */
              font-size: 2.000rem;
          }
          h4 {
              /* 30px */
              font-size: 1.750rem;
          }
          /* For desktop:  responsive */
          .col-1 {width: 8.33%;}
          .col-2 {width: 16.66%;}
          .col-3 {width: 25%;}
          .col-4 {width: 33.33%;}
          .col-5 {width: 41.66%;}
          .col-6 {width: 50%;}
          .col-7 {width: 58.33%;}
          .col-8 {width: 66.66%;}
          .col-9 {width: 75%;}
          .col-10 {width: 83.33%;}
          .col-11 {width: 91.66%;}
          .col-12 {width: 100%;}
      }
      
      @media only screen and (max-width: 768px) {
          html {
              font-size: 14px;
          }
          h1 {
              /* 24px; */
              font-size: 1.714rem; 
          }
          h2 {
              /* 22px; */
              font-size: 1.571rem; 
          }
          h3 {
              /* 20px */
              font-size: 1.429rem;
          }
          h4 {
              /* 30px */
              font-size: 1.286rem;
          }
          /* For mobile phones: */
          [class*="col-"] {
              width: 100%;
          }
      
      }

      .background {
        background: #a01f61;
        background: -moz-linear-gradient(45deg, #a01f61 0%, #bc3926 100%);
        background: -webkit-linear-gradient(45deg, #a01f61 0%,#bc3926 100%);
        background: linear-gradient(45deg, #a01f61 0%,#bc3926 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a01f61', endColorstr='#bc3926',GradientType=1 );
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: -10;
    }
      
    `}</style>
    <div className="background"></div>
    <Navbar></Navbar>
  </div>
);

export default Home;
