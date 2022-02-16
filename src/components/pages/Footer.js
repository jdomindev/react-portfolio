import React from 'react'

export default function Footer() {
    return (
        <footer className="text-center text-white" id="contact">
            <div className="container p-4 pb-0">
                <section className="mb-1">
                <a className="btn btn-outline-light btn-floating me-2" href="mailto:jdomindev@gmail.com" role="button"
                    ><i className="fab fa-google"></i
                ></a>
                <a className="btn btn-outline-light btn-floating me-2" href="https://www.linkedin.com/in/jose-dominguez-94b689225/" role="button"
                    ><i className="fab fa-linkedin"></i
                ></a>
                <a className="btn btn-outline-light btn-floating me-2" href="https://github.com/jdomindev" role="button"
                    ><i className="fab fa-github"></i
                ></a>
                </section>
            </div>
            <div className="mt-3">
                <a className="text-white text-decoration-none" href="mailto:jdomindev@gmail.com">jdomindev@gmail.com</a>
            </div>
            <div className="text-center p-3">
                <h6 className="text-white text-decoration-none">© 2022 Copyright: Jose Dominguez</h6>
            </div>
        </footer>
    );
}