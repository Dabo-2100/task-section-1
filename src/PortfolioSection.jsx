import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
import img3 from "./assets/img-3.jpg";
import img4 from "./assets/img-4.jpg";
import img5 from "./assets/img-5.jpg";
import img6 from "./assets/img-6.jpg";
export default function PortfolioSection() {

    return (
        <div className="col-12 container d-flex flex-column justify-content-center">
            <p>Portfolio</p>
            <h2>We are nominated to<br /> Agency of Year</h2>
            <div className="col-12 d-flex flex-wrap">
                <div className="p-2 col-12 col-md-6 col-lg-4">
                    <img className="col-12 object-fit-cover" src={img1} style={{ height: "360px" }} />
                </div>
                <div className="p-2 col-12 col-md-6 col-lg-4">
                    <img className="col-12 object-fit-cover" src={img2} style={{ height: "360px" }} />
                </div>
                <div className="p-2 col-12 col-md-6 col-lg-4">
                    <img className="col-12 object-fit-cover" src={img3} style={{ height: "360px" }} />
                </div>
                <div className="p-2 col-12 col-md-6 col-lg-4">
                    <img className="col-12 object-fit-cover" src={img4} style={{ height: "360px" }} />
                </div>
                <div className="p-2 col-12 col-md-6 col-lg-4">
                    <img className="col-12 object-fit-cover" src={img5} style={{ height: "360px" }} />
                </div>
                <div className="p-2 col-12 col-md-6 col-lg-4">
                    <img className="col-12 object-fit-cover" src={img6} style={{ height: "360px" }} />
                </div>
            </div>
        </div>
    )
}