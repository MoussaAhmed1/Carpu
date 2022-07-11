import React from "react";

export default function Footer() {
  return (
    <>
      {/* <!-- start footer--> */}
      <div className="footer">
        {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
        <footer className="bg-dark text-center text-white">
          {/* <!-- Section: Social media --> */}
          <h3 className="text-center p-3">TRAVU</h3>
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-outline-light btn-floating m-1 rounded-circle"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn btn-outline-light btn-floating m-1 rounded-circle"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn btn-outline-light btn-floating m-1 rounded-circle"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn btn-outline-light btn-floating m-1 rounded-circle"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-outline-light btn-floating m-1 rounded-circle"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            {/* <!-- Github --> */}
            <a
              className="btn btn-outline-light btn-floating m-1 rounded-circle"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>

          <div
            className="text-center p-3"
            style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}
          >
            © 2022 All Right Reserved by TRAVU
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
      {/* <!-- end footer--> */}
    </>
  );
}
