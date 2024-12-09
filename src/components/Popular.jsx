import { PiMoonStarsFill } from "react-icons/pi";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
function Popular({ packages }) {
  if (!packages || packages.length === 0) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      <h1 className="package-title">Popular packages deals </h1>
      <div className="container">
        {packages.map((pkg) => (
          <div key={pkg.id} className="card">
            <h2 className="package-name">{pkg.name}</h2>
            <img className="package-img" src={pkg.image} alt={pkg.name} />

            <div className="package-details">
              <p className="package-place">{pkg.place}</p>

              <p className="package-duration">
                <PiMoonStarsFill className="icon" />
                <span>{pkg.duration}</span>
              </p>
              <p className="package-duration">
                <FaBed className="icon" />
                <span>{pkg.catergory}</span>
              </p>
              
              <p className="package-duration">
                <BsCalendarCheckFill className="icon" />
                <span>{pkg.date}</span>
              </p>
              
              <p className="package-duration">
                <FaPlaneDeparture className="icon" />
                <span>{pkg.details}</span>
              </p>
              
              <p className="package-price">
                <h5
                  style={{
                    float: "none",
                    fontWeight: "normal",
                    fontSize: "16px",
                    marginLeft: "40px",
                  }}
                >
                  From
                </h5>

                ${pkg.price}
                <h6
                  style={{
                    float: "none",
                    fontWeight: "normal",
                    fontSize: "14px",
                    color: "#5A5A5A",
                  
                  }}
                >
                  total per person
                </h6>
              </p>
            </div>

            <button className="btn-card">Book package</button>
          </div>
        ))}
      </div>
    </>
  );
}
export default Popular;
