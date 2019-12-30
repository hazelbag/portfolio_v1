import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <section className="about-section" id="about">
      <div>
        <h2>About Me</h2>
        <p className="about-intro"> I am an adaptable human,
        and the most punctilous person I know.<br /><br />
          I love focusing on the look and feel of what I am developing, but thanks
          to my full-stack web developer bootcamp,
          I am a competent MERN (MongoDB, ExpressJS, ReactJS, NodeJS) Stack developer.
          Code has revolutionized my life and I want to use it to revolutionize
          the lives of others.
        <br />  <br />
          I have a unique background which has equipped me with diverse skills.
          I want to continue to challenge myself and
          learn and grow as a developer while building interesting things that make a difference.
      </p>
        <br />
        <p>I am looking to enter the developer market to further my knowledge and to better my skills as a developer, to build and
           deploy web applications that will sustain and better my then employer. To ensure I can upskill not just myself, but those around me, to learn and be taught.
           I am looking to utilize my skills and experience gained to date to the benefit of myself and my future employer.
      </p>
        <br />
        <p>Being employed over the past several years as a Human Resources Officer I have an understanding of what employers require
           from their employees. I am Flexible in my approach to new tasks and adapt well to new environments and cultures.
           I am able to “hit the ground running” with projects as required. I possess excellent skills with accuracy and attention to detail,
           while remaining efficient in all activities. I am an effective team player who can also use my initiative to complete tasks autonomously,
           working effectively under pressure and prioritizing workloads effectively. I work well with people of all levels, communicating concisely
           with both clients and colleagues. I also have knowledge of the IT industry and have assisted IT departments at all employers.
      </p>
      <br />
      <p>
      I have always had an interest in tech, I enjoy working with PC's and learning how to write code, seeing it all come together at the end, it's joyful. 
      In my opinion, working in HR &amp; Payroll was a tedious job, but working as a Dev is certainly a highlight for me.
      </p>
      <br />
      <p> Download my Resume:<br />
        <a 
        href="/directory/yourfile.pdf" 
        download="newfilename" 
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
        height: 100vh;
        padding: 0 2rem;
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