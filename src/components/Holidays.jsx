import { GoArrowUpRight } from "react-icons/go";
function Holidays({cards}) {
    if (!cards || cards.length === 0) {
        return <div>Loading ...</div>;
      }
  return (
    <>
    <h1 style={{ textAlign: 'center', margin: '20px 0' ,fontFamily:' Arial, Helvetica, sans-serif'}}>Always offering amazing holiday packages</h1>
    <div className="card-container">
      {cards.map((card) => (
        <div key={card.id} style={{ backgroundImage: `url(${card.image})` }} className="holiday-card">
       
        <div className="card-details">
          
          <p className="holiday-place">{card.place}</p> 
          <p
  className="holiday-price"
  style={{
    position: "absolute",  // Position the price absolutely within the container
    left: "340px",          // Adjust to control the distance from the left edge
    top: "500px",           // Adjust to position it vertically
    color: "blue",        // Text color for visibility
            // Optional: adds padding around the price
     // Centers the text horizontally
  }}
>
  <h6 style={{ display: "block", float:'none', fontSize: "18px" }}>From</h6> {/* "From" on top */}
 ${card.price}  {/* Price directly below "From" */}
</p>



          <GoArrowUpRight
        style={{
          float: "left", // Makes the icon float on the left
          marginRight: "20px", // Adds some space to the right of the icon
          fontSize: "24px",
          marginTop:"20px" // Adjust the size of the icon if needed
        }}
      />
        </div>
      </div>
      
      ))}
    </div>
<div className="holiday-container">
  <img
    alt="holiday-img"
    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtcxndn5iB2EQPvCAxvjyeLAmtCjkyU31M1dqGabxh5TwDKxqC"
    className="holiday-image"
  />
  <div className="holiday-details">
    <h1 className="holiday-title">Inclusive Collection, part of Mantis Hotel <br/>and Resort</h1>
    <p className="holiday-description">
      Looking to plan a trip and create lasting memories with loved <br/>ones? Well
      it couldn't be better timing. Book your package<br/> with us and save £60 per
      adult and £45 per child on <br/>Mantis Hotel holidays when you fly with
      RwandAir.
    </p>
    
<button className="holiday-button">Browse package</button>
<div className="button-container">
  <button className="scroll-btn"></button>
  <button className="small-btn"></button>
  <button className="small-btn"></button>
</div>

</div>

  </div>
 

    </>
  );
}
export default Holidays;
