import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer'

const Layout = (props) => (
  <div>
    <Head>
      <title>jOlivier || Web Developer</title>
      <link rel="shortcut icon" type="image/x-icon" href="./static/myIcon.ico" />
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossorigin="anonymous"
      />
    </Head>
    <Navbar />
    <div>
      {props.children}

      <Footer />
      <style jsx>{`
  
  div {
    background-color: #000;
    background-image: linear-gradient(62deg, #3a3d40 0%, #181719 100%);
  }
`}</style>
    </div>
  </div>
);

export default Layout;