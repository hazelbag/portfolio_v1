import Layout from '../components/Layout';
import About from '../components/about';
import Contact from '../components/contact';


const Index = (props) => (
  <Layout>
    <div>
      <h1>Hey I'm Jacques</h1>
      <h3>Full Stack Web Developer</h3>
      <p>and I want to create and turn your ideas into reality</p>
    </div>
    <section>
      <About />
    </section>
    <br />
    <section>
      <Contact />
    </section>
    <style jsx>{`
    div {
      padding-top: 20rem;
      padding-bottom: 15rem;
    }
    h1 {
      text-align: center;
      font-size: 72px;
      background: -webkit-linear-gradient(#38d39f, #38a4d3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h3 {
      text-align: center;
      font-size: 3rem;
      padding: 2rem 0;
      color: #fff
    }
    p {
      text-align: center;
      color: #fff;
      font-size: 22px;
    }
  `}</style>
  </Layout>
);

export default Index;