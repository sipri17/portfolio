import './Root.css'

export default function HomeView() {
    return (
        <div>


            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>Siprianus L Manao</h1>
                    <p>I'm a full-stack developer</p>
                </div>
            </section>{/* End Hero */}
            <main id="main">
                
            <img src={require('../assets/img/sipri-manga.png')} alt="" />
            <img src={require('../assets/img/movie-sipri.png')} alt="" />
             
               

            </main>{/* End #main */}
            {/* ======= Footer ======= */}
          
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            {/* Vendor JS Files */}
            {/* Template Main JS File */}
        </div>

    )
}