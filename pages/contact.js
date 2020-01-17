import Layout from '../components/Layout';

const Contact = () => (
    <Layout>
        <section id="contact" className="contact-section">
            <div className="contact-section-header">
                <h2 className='sectionHeading'>Let's work together...</h2>
                <br />
                <p className='sectionParagraph'>How do you take your coffee?</p>
            </div>
            <br />
            <div className="contact-links">
                <a href="https://github.com/hazelbag"
                    target="_blank"
                    className="contact-details">
                    <i className="fab fa-github"></i> GitHub
            </a>

                <a href="mailto:jacques@outlook.com"
                    className="contact-details">
                    <i className="fas fa-at"></i> Send a mail
            </a>

                <a className="contact-details"
                    href="tel:+27662490030">
                    <i className="fas fa-phone"></i> 066 249 0030
            </a>
            <br />
            <img className='wolfImage' src='./static/wolf.png' />
            </div >
            <style jsx>{`
    .contact-section {
        display: flex;
        flex-direction: column;
        text-align: center;
        min-width: 100%;
        min-height: 100%;
        padding-top: 10rem;
        padding-bottom: 20rem;
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
      }
      
    .sectionHeading {
        text-align: center;
        font-size: 7rem;
        font-weight: bolder;
        background: -webkit-linear-gradient(#38d39f, #38a4d3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    
    .sectionParagraph {
        text-align: center;
        font-style: italic;
        font-size: 24px;
        color: #fff
      }

    i {
        background: -webkit-linear-gradient(#38d39f, #38a4d3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .contact-links {
        font-size: 2.4rem;
        color: #fff;
    }
      
    .contact-details {
        display: inline;
        color: white;
        justify-content: center;
        width: 100%;
        max-width: 980px;
        margin-top: 4rem;
        flex-wrap: wrap;
        font-size: 36px;
        padding: 0.8rem;
      }
      
    .contact-details:hover {
        transform: translateY(8px);
        background: -webkit-linear-gradient(#38d39f, #38a4d3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .wolfImage {
        align: center;
        height: 45vmin;
        margin: 1px auto;
        display: block;
        opacity: 0.4;
      }
`}</style>
        </section >
    </Layout>
);

export default Contact;