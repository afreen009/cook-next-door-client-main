import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import "../CooksDetailsPage/CooksDetailsPage.scss";
import FoodCard from "../../components/FoodCard/FoodCard";
import CooksLocation from "../CooksLocation/CooksLocation";
import Header from "../../components/Header/Header";

export default function CooksDetailsPage() {
  const { cooksId } = useParams();
  const location = useLocation();
  const dataReceived = location.state;
  const cooksName = dataReceived.name;
  const cookslat = dataReceived.lat;
  const cookslong = dataReceived.long;
  console.log(cooksName, dataReceived.lat, dataReceived.long);
  const [cooksDetails, setcooksDetails] = useState([]);
  const getCooksMenu = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/cooks/${cooksId}`);
      setcooksDetails(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCooksMenu();
  }, [cooksId]);

  const [firstItem, ...otherItems] = cooksDetails;
  const index = 0;

  return cooksDetails ? (
    <>
      <Header />
      <div className="menu_item">
        <div className="menu_item__large-food--card">
          <FoodCard food={firstItem} name={cooksName} large />
        </div>
        <h1>Special Menu</h1>
        <div className="menu_item__food-card--container">
          {otherItems.map((food, i) => (
            <FoodCard key={food.food_id} food={food} name={cooksName} />
          ))}
        </div>
        <div>
          <CooksLocation
            lati={cookslat}
            longi={cookslong}
            // name={cooksDetails[i]?.name}
          />
        </div>
      </div>
    </>
  ) : (
    <>
      <div>No Menu</div>
    </>
  );
}
