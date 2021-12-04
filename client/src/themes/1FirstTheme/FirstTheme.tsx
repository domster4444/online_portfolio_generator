import React from 'react';
import { Helmet } from 'react-helmet';

import './assets/css/main.css';

const index = () => {
  return (
    <main id="first-theme-main">
      <html lang="en">
        <body className="is-preload">
          {/* <!-- Header --> */}
          <section id="header">
            <header className="major">
              <h1>Hi There</h1>
              <p>
                This is Kshitiz
                <a href="http://html5up.net"> hire me </a>
              </p>
            </header>
            <div className="container">
              <ul className="actions special">
                <li>
                  <a href="#one" className="button primary scrolly">
                    Begin
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* <!-- One --> */}
          <section id="one" className="main special">
            <div className="container">
              <span className="image fit primary">
                <img src="images/pic01.jpg" alt="" />
              </span>
              <div className="content">
                <header className="major">
                  <h2>Who I am</h2>
                </header>
                <p>
                  Aliquam ante ac id. Adipiscing interdum lorem praesent fusce
                  pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed
                  adipiscing eu amet interdum lorem blandit vis ac commodo
                  aliquet integer vulputate phasellus lorem ipsum dolor lorem
                  magna consequat sed etiam adipiscing interdum.
                </p>
              </div>

              <a href="#two" className="goto-next scrolly">
                Next
              </a>
            </div>
          </section>

          {/* <!-- Two --> */}
          <section id="two" className="main special">
            <div className="container">
              <span className="image fit primary">
                <img src="images/pic02.jpg" alt="" />
              </span>
              <div className="content">
                <header className="major">
                  <h2>Stuff I do</h2>
                </header>
                <p>
                  Consequat sed ultricies rutrum. Sed adipiscing eu amet
                  interdum lorem blandit vis ac commodo aliquet vulputate.
                </p>
                <ul className="icons-grid">
                  <li>
                    <span className="icon solid major fa-camera-retro" />
                    <h3>Magna Etiam</h3>
                  </li>
                  <li>
                    <span className="icon solid major fa-pencil-alt" />
                    <h3>Lorem Ipsum</h3>
                  </li>
                  <li>
                    <span className="icon solid major fa-code" />
                    <h3>Nulla Tempus</h3>
                  </li>
                  <li>
                    <span className="icon solid major fa-coffee" />
                    <h3>Sed Feugiat</h3>
                  </li>
                </ul>
              </div>

              <a href="#three" className="goto-next scrolly">
                Next
              </a>
            </div>
          </section>

          {/* <!-- Three --> */}
          <section id="three" className="main special">
            <div className="container">
              <span className="image fit primary">
                <img src="images/pic03.jpg" alt="" />
              </span>
              <div className="content">
                <header className="major">
                  <h2>One more thing</h2>
                </header>
                <p>
                  Aliquam ante ac id. Adipiscing interdum lorem praesent fusce
                  pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed
                  adipiscing eu amet interdum lorem blandit vis ac commodo
                  aliquet integer vulputate phasellus lorem ipsum dolor lorem
                  magna consequat sed etiam adipiscing interdum.
                </p>
              </div>

              <a href="#footer" className="goto-next scrolly">
                Next
              </a>
            </div>
          </section>

          {/* <!-- Footer --> */}
          <section id="footer">
            <div className="container">
              <header className="major">
                <h2>Get in touch</h2>
              </header>
              <form method="post" action="#">
                <div className="row gtr-uniform">
                  <div className="col-6 col-12-xsmall">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-6 col-12-xsmall">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows={4}
                    />
                  </div>
                  <div className="col-12">
                    <ul className="actions special">
                      <li>
                        <input
                          type="submit"
                          value="Send Message"
                          className="primary"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <footer>
              <ul className="icons">
                <li>
                  <a
                    href="https://www.google.com"
                    className="icon brands alt fa-twitter"
                  >
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com"
                    className="icon brands alt fa-facebook-f"
                  >
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com"
                    className="icon brands alt fa-instagram"
                  >
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com"
                    className="icon brands alt fa-dribbble"
                  >
                    <span className="label">Dribbble</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com"
                    className="icon solid alt fa-envelope"
                  >
                    <span className="label">Email</span>
                  </a>
                </li>
              </ul>
              <ul className="copyright">
                <li>&copy; Untitled</li>
                <li>
                  Design:
                  <a href="http://html5up.net">HTML5 UP</a>
                </li>
                <li>
                  Demo Images:
                  <a href="http://unsplash.com">Unsplash</a>
                </li>
              </ul>
            </footer>
          </section>

          <Helmet>
            <script src="assets/js/jquery.min.js" />
            <script src="assets/js/jquery.scrollex.min.js" />
            <script src="assets/js/jquery.scrolly.min.js" />
            <script src="assets/js/browser.min.js" />
            <script src="assets/js/breakpoints.min.js" />
            <script src="assets/js/util.js" />
            <script src="assets/js/main.js" />
          </Helmet>

          {/* <!-- Scripts --> */}
          {/* <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/jquery.scrollex.min.js"></script>
      <script src="assets/js/jquery.scrolly.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script> */}
        </body>
      </html>
    </main>
  );
};

export default index;
