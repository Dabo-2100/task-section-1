import "./HeroSection.css";
import { TiThMenu } from "react-icons/ti";
export default function HeroSection() {
    return (
        <div className="col-12 position-relative heroSection d-flex flex-column justify-content-center align-items-center">
            <header className="col-12 position-absolute top-0 d-flex container align-items-center justify-content-between py-3">
                <h3>Creative Studio</h3>
                <TiThMenu className="text-white fs-3" data-bs-toggle="offcanvas" href="#offcanvasExample" />
                <div className="offcanvas offcanvas-start d-flex flex-column align-items-center" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <p>Page 1</p>
                    <p>Page 2</p>
                    <p>Page 3</p>
                </div>
            </header>
            <h1 className="text-white col-12 text-center">Creative Stories</h1>
        </div>
    )
}