export default function Portfolios(){
    return(
        <section  className="about">
        <div className="container">
            <div className="section-title">
                <h2>My Projects</h2>
                <p>I've created a few web app, and deployed some of them. Here are a few screenshot of the deployed websites. </p>
            </div>
            <div className="row my-2">
                <div className="col-lg-6" data-aos="fade-right">
                    <img src={require('../assets/img/sipri-manga.png')} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-4 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Let's Read 'Em All</h3>
                    <p className="fst-italic">
                        
                    </p>
               
                    <p>
                    A website that provides information about all manga that has ever been published using myanimelist API, with a feature of 'Want To Read' list.
                    Checkout the website <a href="https://sipri-manga.web.app/" target="_blank">here</a> .
                    </p>
                </div>
            </div>

            <div className="row my-2">
                <div className="col-lg-6" data-aos="fade-right">
                    <img src={require('../assets/img/movie-sipri.png')} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-4 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Cinema App</h3>
                    <p className="fst-italic">
                        
                    </p>
               
                    <p>
                    A website that provides information about popular movies.
                    Checkout the website <a href="https://movie-sipri-user.web.app/" target="_blank">here</a> .
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}