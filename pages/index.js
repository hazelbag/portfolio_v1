import Layout from '../components/Layout';


const Index = () => (
  <Layout>
    <div className='landingDiv'>
      <img className='wolfImage' src='./static/wolf.png' />
      <div className="box-info">
        <div className="border1">
          <div className="banner-text">
            <h1 className='landingHeading'>Hey I'm Jacques,</h1>
            <h3 className='introHeading'>Full Stack Web Developer</h3>
            <p className='introParagraph'>and I want to turn your ideas into reality</p>
            <hr />
            <br />
            <p className='introParagraph'>
              HTML/CSS | Bootstrap | JavaScript | React | NextJS | NodeJS | Express | MongoDB
            </p>
          </div>
        </div>
      </div>
      <img className='wolfImage' src='./static/wolfhowl.png' />
    </div>
    <style jsx>{`
    .landingDiv {
      padding-top: 0.8rem;
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
    .wolfImage {
      align: center;
      height: 30vmin;
      margin: 1px auto;
      display: block;
      opacity: 0.4;
    }
    .box-info {
      line-height: 1;
    }
    .banner-text {
      background-color: black;
      opacity: 0.8;
      width: 65%;
      margin: auto;
      border-radius: 10px;
    }
    .banner-text hr {
      border-top: 5px dotted white;
      width: 50%;
      margin: auto;
    }
    .landingHeading {
      text-align: center;
      font-size: 5.5rem;
      font-weight: bolder;
      background: -webkit-linear-gradient(#38d39f, #38a4d3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .introHeading {
      text-align: center;
      font-weight: bold;
      font-size: 3rem;
      padding: 1.4rem 0;
      color: #fff
    }
    .introParagraph {
      text-align: center;
      color: #fff;
      font-size: 22px;
      padding-bottom: 1rem;
    }
  `}</style>
  </Layout>
);

export default Index;