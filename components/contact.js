
const About = () => (
    <section id="contact" className="contact-section">
        <div className="contact-section-header">
            <h2>Let's work together...</h2>
            <br />
            <p>How do you take your coffee?</p>
        </div>
        <br />
        <div className="contact-links">
            <a  href="https://github.com/hazelbag"
                target="_blank"
                className="btn contact-details">
                <i className="fab fa-github"></i> GitHub
            </a>
            
            <a  href="mailto:jacques@outlook.com" 
                className="btn contact-details">
                <i className="fas fa-at"></i> Send a mail
            </a>

            <a  className="btn contact-details"
                href="#">
            <i className="fas fa-phone"></i> 066 249 0030
            </a>
        </div >
        <style jsx>{`
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 50vh;
        padding: 0 2rem;
        padding-bottom: 10rem;
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

    i {
        background: -webkit-linear-gradient(#38d39f, #38a4d3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
      
    a {
        display: inline
        justify-content: center;
        width: 100%;
        max-width: 980px;
        margin-top: 4rem;
        flex-wrap: wrap;
        color: white
        font-size: 2.4rem;
        transition: transform 0.3s ease-out;
      }
      
    a:hover {
        transform: translateY(8px);
        background: -webkit-linear-gradient(#38d39f, #38a4d3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
`}</style>
    </section >
);

export default About;