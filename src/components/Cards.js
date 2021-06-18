import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-agra.jpg"
              text="Taj Mahal is mausoleum complex in Agra, built by the Mughal emperor Shah Jahan."
              label="AGRA"
              path="/agra"
            />
            <CardItem
              src="images/img-goa.jpg"
              text="Indian and foreign tourists at beaches in Goa. Goa stands 6th in the Top 10 Nightlife cities in the world."
              label="GOA"
              path="/goa"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-manali.jpg"
              text="Manali experiences snowfall predominantly between December and the beginning of March."
              label="MANALI"
              path="/manali"
            />
            <CardItem
              src="images/img-ladakh.jpg"
              text="Ladakh is the highest plateau in India with much of it being over 3,000 m (9,800 ft)"
              label="LADAKH"
              path="/ladakh"
            />
            <CardItem
              src="images/img-kerela.jpg"
              text="Kerala's culture and traditions, have made the state one of the most popular tourist destinations in India."
              label="KERELA"
              path="/kerela"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
