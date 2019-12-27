import Link from 'next/link';

const Navbar = () => (
    <div className="footer">
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
            <div className="container text-center">
                <small>Copyright &copy; Jacques Olivier - 2019</small>
            </div>
            <style jsx>{`
    footer {
        background-image: linear-gradient(#04519b, #033C73 60%, #02325f);
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 60px;
      }
      div {
        color: rgba(255,255,255,0.8);
        text-align: center;
      }
    `}
            </style>
        </footer>
    </div>
);

export default Navbar;