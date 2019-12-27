import Layout from '../components/Layout';


const Projects = (props) => (
  <Layout>
    <div>
      <h1>Check out my projects</h1>
    </div>
    <style jsx>{`
    div {
      padding-top: 20rem;
      padding-bottom: 15rem;
      height: 100vh;
    }
    h1 {
        text-align: center;
        font-size: 6rem;
        background: -webkit-linear-gradient(#38d39f, #38a4d3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  `}</style>
  </Layout>
);

export default Projects;