import "./SectionTwo.css";
import leftImg from "./assets/SectionTwo-bg.jpg";

export default function SectionTwo({ dir }) {
    return (
        <div className={`col-12 sectionTwo d-flex flex-wrap ${dir}`}>
            <img src={leftImg} className="col-12 col-md-6 h-100 object-fit-cover" />
            <div className="col-12 col-md-6 h-100 p-5">
                <p className="about d-flex mb-0 align-items-center"><span></span>about us</p>
                <h3>
                    Time to Make<br />
                    a Difference
                </h3>
                <p>Phasellus scelerisque arcu vestibulum tempor tempor. Donec vulputate leo et metus hendrerit bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In scelerisque nisl nec ornare euismod.</p>
                <button>View More</button>
            </div>
        </div>
    )
}