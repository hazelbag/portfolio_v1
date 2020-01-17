import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <section className="about-section" id="about">
      <div className='container'>
        <h2 className='sectionHeading'>About Me...</h2>
        <p className="about-intro"> I am an adaptable human,
        and the most punctilous person I know.<br /><br />
          I love focusing on the look and feel of what I am developing, but thanks
          to my full-stack web developer bootcamp,
          I am a competent MERN (MongoDB, ExpressJS, ReactJS, NodeJS) Stack developer.
          Code has revolutionized my life and I want to use it to revolutionize
          the lives of others.
      </p>
        <br />
        <p className="about-intro">
          I have always had an interest in tech, I enjoy learning how to write code, seeing it all come together at the end, it's joyful.
          Working as a Dev is certainly a highlight for me.
      </p>
        <br />
        <p className='resumeDownload'> Download my Resume:<br />
          <a
            href="../static/J Olivier CV.pdf"
            download="J Olivier CV"
            className="btn-show-all"
            target="_blank">
            <i className="fas fa-file-download"></i></a>
        </p>
        <br />
        <img className='wolfImage' src='./static/wolf2.png' />
      </div>
      <style jsx>{`
    .about-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      min-height: 100%;
      background: -webkit-linear-gradient(
        to bottom,
        #4286f4,
        #373b44
      );
      background: linear-gradient(
        to bottom,
        #4286f4,
        #373b44
      );
      min-height: 100%;
      }
      
    .sectionHeading {
      font-size: 8rem;
      background: -webkit-linear-gradient(#38d39f, #38a4d3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      }
    
    .about-intro {
      text-align: center;
      font-style: italic;
      font-size: 24px;
      color: #fff
      }
    .resumeDownload {
      font-size: 22px;
    }
    .btn-show-all {
      text-decoration: none;
      color: #fff;
      }
      .btn-show-all:hover {
        transform: translateY(8px);
        background: -webkit-linear-gradient(#38d39f, #38a4d3);
      }
      .wolfImage {
        align: center;
        height: 45vmin;
        margin: 1px auto;
        display: block;
        opacity: 0.4;
      }
`}</style>
    </section>
  </Layout>
);

export default About;