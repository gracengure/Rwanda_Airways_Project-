import { FaArrowUp } from "react-icons/fa";
function Cards() {
    return (
      <>
        <div className="image-container">
          {/* First image with overlay text */}
          <div className="image-wrapper">
            <img
              src="https://pbs.twimg.com/media/FGqJCc3WUAI1U83?format=jpg&name=small"
              alt="Image 1"
            />
            <p className="overlay-text">Explore and Discover Rwanda</p>
            <FaArrowUp className="arrow" />
          </div>
          
          {/* Second image with overlay text */}
          <div className="image-wrapper">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScIBBFpWRPwr0FSBeMHwKQstP3YR-S0pXmFr43WGGBVBRsg9uM"
              alt="Image 2"
            />
            <p className="overlay-text">All Destinations</p>
            <FaArrowUp className="arrow"/>
          </div>
        </div>
      </>
    );
  }
  
  export default Cards;
  