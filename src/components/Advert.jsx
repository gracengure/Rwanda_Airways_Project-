import  pin from "../assets/Screenshot from 2024-12-09 09-54-08.png"
import world from "../assets/Screenshot from 2024-12-09 09-56-01.png"
import record from "../assets/Screenshot from 2024-12-09 09-54-17.png"
import plane from "../assets/Screenshot from 2024-12-09 09-54-23.png"
function Advert(){
    return(<>
    <div style ={{backgroundColor:'white'}}>
    <h1 style={{ textAlign: 'center', margin: '20px 0' ,fontFamily:' Arial, Helvetica, sans-serif'}}>
                    Why book with RwandAir Holidays
                </h1>
    <div className="advert-container">
            <div className="advert-item">
                <img src={pin} alt="Save up to 30%" />
                <h3>Save up to 30%</h3>
                <p>Unlock savings of up to 30% on your next purchase! Don't miss out on this incredible opportunity to save big.</p>
            </div>
            <div className="advert-item">
                <img src={world} alt="Worldwide coverage" />
                <h3>Worldwide coverage</h3>
                <p>Enjoy worldwide coverage with our unbeatable savings offer! Wherever your destination, our discounts have you covered.</p>
            </div>
            <div className="advert-item">
                <img src={record} alt="Collect & Spend miles" />
                <h3>Collect & Spend miles</h3>
                <p>Collect and spend miles with ease! Our offer lets you earn and utilize miles for your dream holiday.</p>
            </div>
            <div className="advert-item">
                <img src={plane} alt="Means of Transport" />
                <h3>Means of Transport</h3>
                <p>Choose the world's safest airline for peace of mind during your travels. Safety is our top priority.</p>
            </div>
        </div>
</div>

    </>)
}
export default Advert