import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Popular from "./components/Popular";
import Holidays from "./components/Holidays";
import Cards from "./components/Cards";
import LandingPage from "./components/LandingPage";
function App() {
  const [packages, setPackages] = useState([]);
  const[cards ,setCards]=useState([])
  useEffect(() => {
    fetch("http://localhost:3000/package")
      .then((response) => response.json())
      .then((data) => {
        setPackages(data);
      })
      .catch((error) => console.error('Error loading packages:', error));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/card")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      })
      .catch((error) => console.error('Error loading Cards:', error));
  }, []);
  return (
    <>
    <LandingPage/>
    <Holidays cards={cards}/>
      <Popular  packages={packages}/>
      <Cards/>
      <Footer />
    </>
  );
}

export default App;
