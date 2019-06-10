/*------------------------------------------------------------------
    Company: SappTurn
    Website Company: sappturn.com  
    Author: Lina María Montaño Ramírez (Calypso Brontë  🦄 🔻 )
    Website Author: calypsobronte.me
    Creation date: 03/06/2019
    City/Country: Medellín/Colombia
    Project: Sitio web en Contrucción
    Version:  v1.0.0
    License: MIT
    -----------------------------Modifications-------------------------
    Last change:   
    Assigned to: 
    -------------------------------------------------------------------
-------------------------------------------------------------------*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import logo from './sappturn_logo_v2.jpeg';

import "./styles.css";

/*<!--Sec declaración de la funcionalidad de la App-->*/
class App extends React.Component {
  componentWillMount() {
    window.onload = () => {
     document.getElementById("home").click();
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Header />

          <Route exact path="/" component={Homepage} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Contact" component={Contact} />

          <Footer />

        </div>
      </BrowserRouter>
    );
  }
}

/*<!--Sec Header-->*/
class Header extends React.Component {
  render() {
    return (
      <header>

        <Link className="logo" to="/">
           <h2><img src={logo} alt=" Logo | SappTurn's" /> <b className="Sapp">Sapp</b><b>Turn</b></h2>
        </Link>

        <nav>
          <ul>
            <li className="first">
              <Link id="home" to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/About">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/Products">Servicios</Link>
            </li>
            <li className="last">
              <Link to="/Contact">Contactanos</Link>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

/*<!--Sec Footer-->*/
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <a href="https://sappturn.com/">
        De LATAM con 💙 para el mundo | SappTurn 🚀
        </a>
        <a href="mailto:info@sappturn.com?Subject=Necesito%20Asesoría" target="_top"><img align="right" src="https://img.icons8.com/color/48/000000/secured-letter.png" width="25" height="25"/></a>
        <a href="https://twitter.com/sappturn"><img align="right" src="https://img.icons8.com/color/48/000000/instagram-new.png" width="25" height="25"/></a>
        <a href="https://instagram.com/sappturn_"><img align="right" src="https://img.icons8.com/color/48/000000/twitter-circled.png" width="25" height="25"/></a>
      </footer>
    );
  }
}

/*<!--Sec inicio-->*/
class Homepage extends React.Component {
  renderContent(x, title, intro, conclusion) {
    return (
      <div key={x}>
        <h3>
          <mark>{title}</mark>
        </h3>
        <p>
          {intro}
        </p>
        <p dangerouslySetInnerHTML={{ __html: conclusion }} />
      </div>
    );
  }

  render() {
    let content = [
      this.renderContent(
        0,
        "Lorem Ipsum",
        "Lorem Ipsum has been the industry's standard dummy text."
      ),
    ];

    return (
      <div className="container-fluid">
        <h1 className="s-blk-shadow">
          Bienvenidos a SappTurn
        </h1>

        <div style={{ marginTop: "50px" }}>
          {content}
        </div>

      </div>
    );
  }
}

/*<!--Sec Productos-->*/
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: ""
    };
  }
  render() {
    
    return (
      <div className="container-fluid">
        <section class="">
        {/*<!--Sec Title-->*/}        
        <div class="container">
        <div class="col-md-12 text-center heading-main heading-main-white">
                  <h1 className="s-blk-shadow">
                    Nuestros Servicios<br/><br/>
                  </h1>
                </div><br/>          
            <div class="row clearfix">              
                {/*<!--Work Block-->*/}
                <div class="work-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div class="inner-box">
                      <div class="icon-box">
                                  <i class="overlay-icon fas fa-book-open"></i>
                        </div>
                        <div class="step">Lorem Ipsum</div>
                        <h2>Lorem Ipsum</h2>
                        <div class="overlay-box">
                          <div class="overlay-inner">
                              <div class="overlay-content">
                                  <i class="overlay-icon fas fa-book-open"></i>
                                    <div class="overlay-step">Lorem Ipsum</div>
                                    <h3><a href="services-single.html">Lorem Ipsum</a></h3>
                                    <div class="text">Lorem Ipsum has been the industry's standard dummy text.</div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
              {/*<!--Work Block-->*/}
                <div class="work-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div class="inner-box">
                      <div class="icon-box">
                                  <i class="overlay-icon fas fa-briefcase"></i>
                        </div>
                        <div class="step">Lorem Ipsum</div>
                        <h2>Lorem Ipsum</h2>
                        <div class="overlay-box">
                          <div class="overlay-inner">
                              <div class="overlay-content">
                                  <i class="overlay-icon fas fa-briefcase"></i>
                                    <div class="overlay-step">Lorem Ipsum</div>
                                    <h3><a href="services-single.html">Lorem Ipsum</a></h3>
                                    <div class="text">LLorem Ipsum has been the industry's standard dummy text. </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*<!--Work Block-->*/}
                <div class="work-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div class="inner-box">
                      <div class="icon-box">
                                  <i class="overlay-icon fas fa-chart-bar"></i>
                        </div>
                        <div class="step">Lorem Ipsum</div>
                        <h2>Lorem Ipsum</h2>
                        <div class="overlay-box">
                          <div class="overlay-inner">
                              <div class="overlay-content">
                                  <i class="overlay-icon fas fa-chart-bar"></i>
                                    <div class="overlay-step">Lorem Ipsum</div>
                                    <h3><a href="services-single.html">Lorem Ipsum</a></h3>
                                    <div class="text">Lorem Ipsum has been the industry's standard dummy text. </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*<!--Work Block-->*/}
                <div class="work-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div class="inner-box">
                      <div class="icon-box">
                                  <i class="overlay-icon fas fa-landmark"></i>
                        </div>
                        <div class="step">Lorem Ipsum</div>
                        <h2>Lorem Ipsum</h2>
                        <div class="overlay-box">
                          <div class="overlay-inner">
                              <div class="overlay-content">
                                  <i class="overlay-icon fas fa-landmark"></i>
                                    <div class="overlay-step">Lorem Ipsum</div>
                                    <h3><a href="services-single.html">Lorem Ipsum</a></h3>
                                    <div class="text">Lorem Ipsum has been the industry's standard dummy text.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
      </section>
      </div>
    );
  }
}

/*<!--Sec Contactanos-->*/
class Contact extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <section class="contact-page-sec">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="contact-info">
                  <div class="contact-info-item">
                    <div class="contact-info-icon">
                      <i class="fas fa-map-marked"></i>
                    </div>
                    <div class="contact-info-text">
                      <h2>Ubicación</h2>
                      <span>Medellín , Colombia</span> 
                    </div>
                  </div>            
                </div>          
              </div>          
              <div class="col-md-4">
                <div class="contact-info">
                  <div class="contact-info-item">
                    <div class="contact-info-icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div class="contact-info-text">
                      <h2>E-mail</h2>
                      <span>info@sappturn.com</span>
                    </div>
                  </div>            
                </div>                
              </div>                
              <div class="col-md-4">
                <div class="contact-info">
                  <div class="contact-info-item">
                    <div class="contact-info-icon">
                      <i class="fas fa-clock"></i>
                    </div>
                    <div class="contact-info-text">
                      <h2>office time</h2>
                      <span>Mon - Thu  9:00 am - 4.00 pm</span>
                      <span>Thu - Mon  10.00 pm - 5.00 pm</span>
                    </div>
                  </div>            
                </div>          
              </div>          
            </div>
          </div>
      </section>
      </div>
    );
  }
  
}

/*<!--Sec Sobre Nosotros-->*/
class About extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <section class="bg-light" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title_all text-center">
                            <h3 class="font-weight-bold">Sobre <span class="text-custom">SappTurn</span></h3>
                            <p class="section_subtitle mx-auto text-muted">Lorem Ipsum has been the industry's standard dummy text. <br/>Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div class="">
                                <i class=""></i>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row vertical_content_manage mt-5">
                    <div class="col-lg-6">
                        <div class="about_header_main mt-3">
                            <div class="about_icon_box">
                                <p class="text_custom font-weight-bold">Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                            <h4 class="about_heading text-capitalize font-weight-bold mt-4">Lorem Ipsum is simply dummy text of the printing industry.</h4>
                            <p class="text-muted mt-3">Lorem Ipsum has been the industry's standard dummy text..</p>

                            <p class="text-muted mt-3"> Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="img_about mt-3">
                            <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" width="600" height="300" alt="" class="img-fluid mx-auto d-block"/>
                        </div>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fas fa-pencil-alt"></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Lorem Ipsum has been the industry's standard dummy text.</h5>
                                <p class="edu_desc mt-3 mb-0 text-muted">Lorem Ipsum has been the industry's standard dummy text. </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fab fa-angellist"></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Lorem Ipsum has been the industry's standard dummy text.</h5>
                                <p class="edu_desc mb-0 mt-3 text-muted">Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fas fa-paper-plane"></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">best platform </h5>
                                <p class="edu_desc mb-0 mt-3 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/><br/>
      </div>
    );
  }
  
}

// ==========================================================
/*<!--Sec Redireccion al index.html-->*/
ReactDOM.render(<App />, document.getElementById("sappturn"));
