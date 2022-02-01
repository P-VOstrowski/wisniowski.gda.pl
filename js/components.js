// *top-bar
class TopBarSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div id="top-bar" class="top-bar">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8">
              <ul class="top-info text-center text-md-left">
                <li><i class="fas fa-map-marker-alt"></i>
                  <p class="info-text">Sklep stacjonarny i ekspozycja -<a href="https://g.page/r/CcMV44COFV3TEBA"> Straszyn ul. Starogardzka 40</a></p>
                </li>
              </ul>
            </div>
            <!--/ Top info end -->
  
            <div class="col-lg-4 col-md-4 top-social text-center text-md-right">
              <ul class="list-unstyled">
                <li>
                  <a title="Facebook" href="https://www.facebook.com/firmaolbud/">
                    <span class="social-icon"><i class="fab fa-facebook-f"></i></span>
                  </a>
                  <a title="Instagram" href="https://www.instagram.com/olbudogrodzenia/">
                    <span class="social-icon"><i class="fab fa-instagram"></i></span>
                  </a>
                  <a title="YouTube" href="https://www.youtube.com/channel/UC55RxfcCKr-9w0NkCeyYFrQ/">
                    <span class="social-icon"><i class="fab fa-youtube"></i></span>
                  </a>
                </li>
              </ul>
            </div>
            <!--/ Top social end -->
          </div>
          <!--/ Content row end -->
        </div>
        <!--/ Container end -->
      </div>`
  }

}

// *header
class HeaderSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header id="header" class="header-two">
        <div class="site-navigation">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light p-0">

                            <div class="logo">
                                <a class="d-block" href="https://www.wisniowski.pl/gdzie-kupic">
                                    <img loading="lazy" src="/wisniowski.gda.pl/images/logo.png" alt="logo olbud">
                                </a>
                            </div><!-- logo end -->

                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div id="navbar-collapse" class="collapse navbar-collapse">
                                <ul class="nav navbar-nav ml-auto align-items-center">
                                    <li class="nav-item dropdown active">
                                        <a href="/wisniowski.gda.pl" class="nav-link dropdown-toggle"
                                            data-toggle="dropdown">Strona główna</a>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a href="o-nas.html" class="nav-link dropdown-toggle" data-toggle="dropdown">O
                                            nas</a>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a href="realizacje.html" class="nav-link dropdown-toggle"
                                            data-toggle="dropdown">Realizacje </a>
                                    </li>


                                    <li class="nav-item dropdown">
                                        <a href="oferta.html" class="nav-link dropdown-toggle"
                                            data-toggle="dropdown">Oferta <i class="fa fa-angle-down"></i></a>
                                        <ul class="dropdown-menu" role="menu">

                                            <li><a href="okna-pvc-primo-wisniowski.html">okna PVC</a></li>
                                            <li><a href="okna-aluminiowe-futuro.html">okna aluminiowe</a></li>
                                            <li><a href="bramy-garazowe-segmentowe.html">bramy garażowe</a></li>
                                            <li><a href="bramy-garazowe-przemyslowe.html">bramy garażowe przemysłowe</a>
                                            </li>
                                            <li><a href="drzwi-zewnetrzne.html">drzwi zewnętrzne</a>
                                            </li>
                                            <li><a href="ogrodzenia-posesyjne.html">ogrodzenia posesyjne</a></li>
                                            <li><a href="ogrodzenia-panelowe.html">ogrodzenia panelowe</a></li>
                                            <li><a href="ogrodzenia-przemyslowe.html">ogrodzenia przemyslowe</a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="kontakt.html">kontakt</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <!--/ Col end -->
                </div>
                <!--/ Row end -->
            </div>
            <!--/ Container end -->

        </div>
        <!--/ Navigation end -->
</header>
        `
  }
}

// *footer
class FooterSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer id="footer" class="footer bg-overlay">
        <div class="footer-main">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-lg-4 col-md-6 footer-widget footer-about">
                <h3 class="widget-title">o nas</h3>
                <img loading="lazy" width="100px" class="footer-logo" src="/wisniowski.gda.pl/images/footer-logo.png" alt="olbud-logo">
                <p>Od lat dostarczamy wysokiej klasy ogrodzenia oraz produkty z zakresu stolarki otworowej. Jesteśmy
                  autoryzowanym salonem sprzedaży marki Wiśniowski. Posiadamy największą ekspozycjię produktów Wiśniowski
                  na pomorzu.</p>
                <div class="footer-social">
                  <ul>
                    <li><a href="https://www.facebook.com/firmaolbud/" aria-label="Facebook"><i
                          class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/olbudogrodzenia/r" aria-label="Instagram"><i
                          class="fab fa-instagram"></i></a></li>
                    <li>
                      <a title="YouTube" href="https://www.youtube.com/channel/UC55RxfcCKr-9w0NkCeyYFrQ/">
                        <span class="social-icon"><i class="fab fa-youtube"></i></span>
                      </a>
                    </li>
                  </ul>
                </div><!-- Footer social end -->
              </div><!-- Col end -->
  
              <div class="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                <h3 class="widget-title">Godziny pracy</h3>
                <div class="working-hours">
                  <br> Poniedziałek <span class="text-right">7:00 - 16:00 </span>
                  <br> Wtorek <span class="text-right">7:00 - 16:00 </span>
                  <br> Środa <span class="text-right">7:00 - 16:00 </span>
                  <br> Czwartek <span class="text-right">7:00 - 18:00 </span>
                  <br> Piątek <span class="text-right">7:00 - 16:00 </span>
                  <br> Sobota <span class="text-right">9:00 - 13:00 </span>
                </div>
              </div><!-- Col end -->
  
              <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                <h3 class="widget-title">Oferta</h3>
                <ul class="list-arrow">
                  <li><a href="ogrodzenia-posesyjne.html">ogrodzenia posesyjne</a></li>
                  <li><a href="ogrodzenia-przemyslowe.html">ogrodzenia przemysłowe</a></li>
                  <li><a href="ogrodzenia-panelowe.html">panele kratowe</a></li>
                  <li><a href="okna-pvc-primo-wisniowski.html">okna pvc primo</a></li>
                  <li><a href="okna-aluminiowe-futuro.html">okna aluminiowe</a></li>
                  <li><a href="drzwi-zewnetrzne.html">drzwi zewnętrzne</a></li>
                </ul>
              </div><!-- Col end -->
            </div><!-- Row end -->
          </div><!-- Container end -->
        </div><!-- Footer main end -->
  
        <div class="copyright">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="copyright-info text-center text-md-left">
                  <span>Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear())
                    </script>, Stworzone przez <a href="https://olbud.com.pl">Olbud</a>
                  </span>
                </div>
              </div>
  
              <div class="col-md-6">
                <div class="footer-menu text-center text-md-right">
                  <ul class="list-unstyled">
                    <li><a href="o-nas.html">O nas</a></li>
                    <li><a href="realizacje.html">Realizacje</a></li>
                    <li><a href="oferta.html">Oferta</a></li>
                    <li><a href="kontakt.html">Kontakt</a></li>
                  </ul>
                </div>
              </div>
            </div><!-- Row end -->
  
            <div id="back-to-top" data-spy="affix" data-offset-top="10" class="back-to-top position-fixed">
              <button class="btn btn-primary" title="Back to Top">
                <i class="fa fa-angle-double-up"></i>
              </button>
            </div>
  
          </div><!-- Container end -->
        </div><!-- Copyright end -->
  </footer><!-- Footer end -->`
  }
}


customElements.define('header-section', HeaderSection)
customElements.define('topbar-section', TopBarSection)
customElements.define('footer-section', FooterSection)