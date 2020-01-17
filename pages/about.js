import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <section className="about-section" id="about">
      <div className='container'>
        <h2>About Me</h2>
        <p className="about-intro"> I am an adaptable human,
        and the most punctilous person I know.<br /><br />
          I love focusing on the look and feel of what I am developing, but thanks
          to my full-stack web developer bootcamp,
          I am a competent MERN (MongoDB, ExpressJS, ReactJS, NodeJS) Stack developer.
          Code has revolutionized my life and I want to use it to revolutionize
          the lives of others.
      </p>
        <br />
        <p>
          I have always had an interest in tech, I enjoy learning how to write code, seeing it all come together at the end, it's joyful.
          Working as a Dev is certainly a highlight for me.
      </p>
        <br />
        <p> Download my Resume:<br />
          <a
            href="../static/J Olivier CV.pdf"
            download="J Olivier CV"
            className="btn-show-all"
            target="_blank">
            <i className="fas fa-file-download"></i></a>
        </p>
      </div>
      <style jsx>{`
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 90vmin;
      background: var(--main-other);
      }
      
    h2 {
      text-align: center;
      font-size: 6rem;
      background: -webkit-linear-gradient(#38d39f, #38a4d3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      }
    
    p {
      text-align: center;
      font-style: italic;
      font-size: 22px;
      color: #fff
      }
    a {
      text-decoration: none;
      color: #fff;
      }
`}</style>
    </section>
  </Layout>
);

export default About;