import Layout from '../components/Layout';


const Projects = (props) => (
  <Layout>
    <section id="projects" className="projects">
      <h1>Check out my projects</h1>
      <br />
      <br />
      <div className="project-grid">
        <p>
          <img className="project-image" src="http://tiny.cc/99etaz" alt="project-alt" />
          <p className="project-title">
            <a href="" target="_blank" />
            <span className="code">&lt;</span>
            Coming Soon
            <span className="code">&gt;</span>
          </p>
        </p>

        <p>
          <img className="project-image" src="http://tiny.cc/99etaz" alt="project-alt" />
          <p className="project-title">
            <a href="" target="_blank"/>
            <span className="code">&lt;</span>
            Coming Soon
            <span className="code">&gt;</span>
          </p>
        </p>

        <p>
          <img className="project-image" src="http://tiny.cc/99etaz" alt="project-alt" />
          <p className="project-title">
            <a href="" target="_blank" />
            <span className="code">&lt;</span>
            Coming Soon
            <span className="code">&gt;</span>
          </p>
        </p>
      </div>
      <a href="https://github.com/hazelbag" className="btn-show-all" target="_blank">Show All <i className="fas fa-chevron-right"></i>
      </a>
    </section>
    <style jsx>{`
    section {
      padding-bottom: 15rem;
      height: 100vh;
      background-color: #000;
      background-image: linear-gradient(62deg,#3a3d40 0%,#181719 100%);
    }
    h1 {
      padding-top: 10rem;
      text-align: center;
      font-size: 6rem;
      background: -webkit-linear-gradient(#38d39f,#38a4d3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .projects {
      text-align: center;
      padding: 0rem 20rem;
      background-color: #000;
      background-image: linear-gradient(62deg, #3a3d40 0%, #181719 100%);
    }
    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      grid-gap: 2rem;
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      margin-bottom: 6rem;
    }
    .project {
      background: #005580;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      border-radius: 2px;
    }
    
    .code {
      color: #007bff;;
      transition: color 0.3s ease-out;
    }
    
    .project:hover .code {
      color: #f50101;
    }
    
    .project-image {
      height: calc(100% - 6.8rem);
      width: 100%;
      object-fit: cover;
    }
    
    .project-title {
      font-size: 1.5rem;
      padding: 0.3rem 0.3rem;
      color: #fff;
      background: #005580;
    }
    
    .project-title:hover {
      color: yellow;
    }
    
    .btn {
      display: inline-block;
      padding: 1rem 2rem;
      border-radius: 2px;
    }
    
    .btn-show-all {
      font-size: 2rem;
      color: #f0f0f0;
      transition: background 0.3s ease-out;
    }
    
    .btn-show-all:hover {
      color: red;
    }
    
    .btn-show-all:hover>i {
      transform: translateX(2px);
    }
    
    .btn-show-all>i {
      margin-left: 10px;
      transform: translateX(0);
      transition: transform 0.3s ease-out;
    }
  `}</style>
  </Layout>
);

export default Projects;