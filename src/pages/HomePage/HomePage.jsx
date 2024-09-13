import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Cooks from "../../components/Cooks/Cooks";
import "../HomePage/HomePage.scss";
import Header from "../../components/Header/Header";
import { Navigate } from "react-router-dom";
import ChefCap from "../../assets/icons/chef-hat.png";
import HighRatedFood from "../../components/HighRatedFood/HighRatedFood";
import AllCooksMap from "../AllCooksMap/AllCooksMap";

export default function HomePage() {
  const anchorRef = useRef(null);
  const chefRef = useRef(null);
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (foodId) => {
    setCart(cart.filter((food) => food.food_id !== foodId));
  };
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [failedAuth, setFailedAuth] = useState(false);
  const [cookList, setCookLists] = useState([]);
  const [menu, setmenu] = useState([]);
  const [allLocation, setallLocation] = useState([]);
  const [maxDistance, setMaxDistance] = useState(400);

  const handleGetLocation = () => {
    console.log("came here");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };
  const token = sessionStorage.getItem("JWTtoken");

  useEffect(() => {
    handleGetLocation();
    if (!token) {
      setFailedAuth(true);
    }

    const fetchCooks = async () => {
      try {
        const menuItemResponse = await axios.get(
          "http://localhost:8080/menu_tem"
        );
        const getAllCooskLocation = await axios.get(
          "http://localhost:8080/cooks/allLocation"
        );
        setmenu(menuItemResponse.data);
        setallLocation(getAllCooskLocation.data);
      } catch (error) {
        console.log(error);
        setError(`${error.response.data.error.message}. Fill all the details.`);
      }
    };
    fetchCooks();
  }, []);

  if (failedAuth) {
    return <Navigate to="/login" />;
  }

  return !menu ? (
    <h1>Loading...</h1>
  ) : (
    <main>
      <Header cart={cart} removeFromCart={removeFromCart} />
      <div className="main__overlay"></div>
      <div className="main__heroDiv">
        <div className="main__titleDiv">
          <div className="capTitle">
            <h1 className="main__title">Cook Next Door</h1>
            <img
              src={ChefCap}
              alt="chef cap"
              onClick={() => {
                chefRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
          <div className="paa">
            <p className="main__para">
              A food app that connects users with neighboring cooks Cook Next
              Door is a revolutionary platform that bridges the gap between home
              cooks and their neighbors. We provide a convenient way for people
              to enjoy homemade meals, discover new cuisines, and support local
              cooks.
            </p>
          </div>
          <button
            onClick={() => {
              anchorRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            className="main__btn"
          >
            Check our menu
          </button>
        </div>
      </div>
      <div id="anchor-id" ref={chefRef}>
        <Cooks allLocation={allLocation} userLocation={location} />
      </div>
      <div id="anchor-id" ref={anchorRef}>
        <HighRatedFood menuList={menu} />
      </div>
    </main>
  );
}
