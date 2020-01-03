import Layout from '../components/Layout';



const Projects = (props) => (
  <Layout>
    <div className="projectTiles">
      <h1>...some of my work</h1>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card mb-3 border-primary bg-light">
              <h4 className="card-header">Star Wars</h4>
              <img className="card-img-top bg-light" src="../static/starwars.JPG" alt="Card image cap" />
              <div className="card-body bg-light">
                <h5 className="card-title">Language used on project</h5>
                  <i className="fab fa-js-square fa-3x"></i>&nbsp;
                  <i className="fab fa-css3-alt fa-3x"></i>&nbsp;
                <br />
                <br />
                <a href="https://github.com/hazelbag/Star-Wars-API-Fun" className="btn btn-primary" target="_blank">GitHub</a>&nbsp;
                <a href="https://starwars.hazelbag.now.sh/" target="_blank" className="btn btn-primary">Live Link</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card mb-3 border-primary bg-light">
              <h4 className="card-header">iTunes Media Search</h4>
              <img className="card-img-top bg-light" src="../static/itunesSearch.JPG" alt="Card image cap" />
              <div className="card-body bg-light">
                <h5 className="card-title">Language used on project</h5>
                <i className="fab fa-react fa-3x"></i>&nbsp;
                  <i className="fab fa-node-js fa-3x"></i>&nbsp;
                  <i className="fab fa-js-square fa-3x"></i>&nbsp;
                  <i className="fab fa-css3-alt fa-3x"></i>&nbsp;
                  <i className="fab fa-html5 fa-3x"></i>
                <br />
                <br />
                <a href="https://github.com/hazelbag/iTunes-Media-Search" className="btn btn-primary" target="_blank">GitHub</a>&nbsp;
                <a href="https://itunes-search-hazelbag.herokuapp.com/" target="_blank" className="btn btn-primary">Live Link</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card mb-3 border-primary bg-light">
              <h4 className="card-header">Minesweeper Game</h4>
              <img className="card-img-top bg-light" src="../static/minesweeper.JPG" alt="Card image cap" />
              <div className="card-body bg-light">
                <h5 className="card-title">Language used on project</h5>
                <i className="fab fa-react fa-3x"></i>&nbsp;
                  <i className="fab fa-node-js fa-3x"></i>&nbsp;
                  <i className="fab fa-js-square fa-3x"></i>&nbsp;
                  <i className="fab fa-css3-alt fa-3x"></i>&nbsp;
                  <i className="fab fa-html5 fa-3x"></i>
                <br />
                <br />
                <a href="https://github.com/hazelbag/minesweeper-react-game" className="btn btn-primary" target="_blank">GitHub</a>&nbsp;
                <a href="https://minesweeperhazelbag.herokuapp.com/" target="_blank" className="btn btn-primary">Live Link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="card mb-3 border-primary bg-light">
              <h4 className="card-header">JSON Notes API</h4>
              <img className="card-img-top bg-light" src="../static/jsonAPP.JPG" alt="Card image cap" />
              <div className="card-body bg-light">
                <h5 className="card-title">Language used on project</h5>
                <i className="fab fa-react fa-3x"></i>&nbsp;
                  <i className="fab fa-node-js fa-3x"></i>&nbsp;
                  <i className="fab fa-js-square fa-3x"></i>&nbsp;
                  <i className="fab fa-css3-alt fa-3x"></i>&nbsp;
                  <i className="fab fa-html5 fa-3x"></i>
                <br />
                <br />
                <a href="https://github.com/hazelbag/JSON-Notes-API-APP" className="btn btn-primary" target="_blank">GitHub</a>&nbsp;
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card mb-3 border-primary bg-light">
              <h4 className="card-header">Speech Detector</h4>
              <img className="card-img-top bg-light" src="../static/speechDetector.JPG" alt="Card image cap" />
              <div className="card-body bg-light">
                <h5 className="card-title">Language used on project</h5>
                <i className="fab fa-js-square fa-3x"></i>&nbsp;
                  <i className="fab fa-css3-alt fa-3x"></i>&nbsp;
                  <i className="fab fa-html5 fa-3x"></i>
                <br />
                <br />
                <a href="https://github.com/hazelbag/Speech-Detector" className="btn btn-primary" target="_blank">GitHub</a>&nbsp;
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card mb-3 border-primary bg-light">
              <h4 className="card-header">Flex Panel Gallery</h4>
              <img className="card-img-top bg-light" src="../static/flexPanel.JPG" alt="Card image cap" />
              <div className="card-body bg-light">
                <h5 className="card-title">Language used on project</h5>
                <i className="fab fa-css3-alt fa-3x"></i>&nbsp;
                  <i className="fab fa-html5 fa-3x"></i>
                <br />
                <br />
                <a href="https://github.com/hazelbag/Flex-Panel-Gallery" className="btn btn-primary" target="_blank">GitHub</a>&nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
    .projectTiles {
      padding-bottom: 8rem;
      }
    container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      padding-bottom: 100rem;
    }
    img {
      height: 250px
    }
    .card-header {
      text-align: center
    }
    .card-body {
      text-align: center;
    }
    h1 {
      padding-top: 5rem;
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
  `}</style>
    </div>
  </Layout>
);

export default Projects;