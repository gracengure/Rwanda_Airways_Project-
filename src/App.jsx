import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Popular from "./components/Popular";
import Holidays from "./components/Holidays";
import Cards from "./components/Cards";
import LandingPage from "./components/LandingPage";
import Advert from "./components/Advert";
function App() {
  
  const[cards ,setCards]=useState([])
  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(`${import.meta.env.VITE_API_URL}/card`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => setCards(data))
  .catch((error) => console.error("Error fetching data:", error));

   
  }, []);


  
  return (
    <>
    <LandingPage/>
    <Advert/>
    <Holidays cards={cards}/>
      <Popular  />
      <Cards/>
      <Footer />
    </>
  );
}

export default App;
