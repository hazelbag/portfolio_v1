import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src="../static/code.svg" width="30" height="30"></img> jOlivier</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/projects"><a className="nav-link">Projects</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/contact"><a className="nav-link">Contact</a></Link>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        nav {
          position: fixed;
          width: 100%;
        }
      `}
    </style>
  </nav>
);

export default Navbar;