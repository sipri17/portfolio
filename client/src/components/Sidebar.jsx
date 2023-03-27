import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {
    const navigate = useNavigate

    return (
      <>
        <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img src={require('../assets/img/Siprianus_L_Manao.jpg')} alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Siprianus L Manao</a></h1>
                    {/* <div className="social-links mt-3 text-center">
                        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div> */}
                </div>
                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><Link to="/" ><i className="bx bx-home" /> <span>Home</span></Link></li>
                        <li><Link to="/resume" ><i className="bx bx-home" /> <span>About</span></Link></li>
                        <li><Link to="/portfolio" ><i className="bx bx-home" /> <span>Portfolio</span></Link></li>
                        {/* <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
                        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></a></li> */}
                        
                    </ul>
                </nav>
            </div>
        </header>
          <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        <img src="https://findicons.com/files/icons/2804/plex/128/gmail.png" style={{height:"18px"}} alt="" /> syprymanao@gmail.com
                    </div>
            
                </div>

            </footer>{/* End  Footer */}</>
    )
}