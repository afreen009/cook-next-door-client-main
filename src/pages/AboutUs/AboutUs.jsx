import React from "react";
import "../AboutUs/AboutUs.scss";
import Header from "../../components/Header/Header";

export default function AboutUs() {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  return (
    <div className="App">
      <Header />
      <main>
        <div id="front">
          <h1>Welcome to Cook Next Door</h1>
          {/* <img
            className="front_image"
            src="https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByZWduYW50JTIwd29tZW4lMjBlYXRpbmclMjBmb29kfGVufDB8fDB8fHww"
            alt="font"
          /> */}
          <p>
            "At Cook Next Door, we believe in the power of home-cooked meals and
            the joy of sharing food with neighbors. Our mission is to create a
            community where local cooks can showcase their culinary talents and
            connect with people who appreciate delicious, homemade dishes."
          </p>
        </div>

        <div id="first" className="reveal">
          <img
            src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwZWF0aW5nJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div>
            <h1>Our Story</h1>
            <p>
              Cook Next Door was born out of a passion for good food and a
              desire to bring people together. We noticed that many talented
              home cooks had the skills and passion to create amazing meals but
              lacked a platform to share their creations. On the other hand,
              food lovers were looking for unique, home-cooked alternatives to
              restaurant dining. This inspired us to build a bridge between
              these two groups, fostering a sense of community and connection
              through the universal love of food.
            </p>
          </div>
        </div>

        <div id="fourth" className="reveal">
          {/* <h2>Our Values</h2> */}
          <h1>Our Values</h1>
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=" "
          />
          <div id="fourth_cards">
            <div>
              <p>
                We aim to build strong, supportive communities where people can
                connect over a shared love of food.
              </p>
            </div>
            <div>
              <p>
                We prioritize quality in every dish, ensuring that our cooks use
                fresh, wholesome ingredients.
              </p>
            </div>
            <div>
              <p>
                Our platform is designed to make it easy for customers to
                discover, order, and enjoy home-cooked meals
              </p>
            </div>
            <div>
              <p>
                We celebrate the passion and creativity of home cooks, giving
                them a platform to shine.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* <footer
        style={{ display: "flex", "justify-content": "space-around" }}
        id="foote"
      >
        <ul>
          <li>
            <a href={{}}>About Us</a>
          </li>
          <li>
            <a href={{}}>Carrers</a>
          </li>
          <li>
            <a href={{}}>Blogs</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={{}}>Training</a>
          </li>
          <li>
            <a href={{}}>FAQs</a>
          </li>
        </ul>
        <div>
          <h2>Conatact Us</h2>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-43-189795.png"
                alt=" "
              />
            </a>
          </span>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
                alt=" "
              />
            </a>
          </span>
          <a
            href="tel: 123456789"
            style={{
              color: "white",
              fontSize: "1.3em",
              letterSpacing: "2px",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bolder",
              marginTop: "20px",
            }}
          >
            Telephone No: +91 232345553
          </a>
        </div>
      </footer> */}
      {/* <p
        style={{
          color: "white",
          textAlign: "center",
          background: "rgb(27, 27, 27)",
          padding: "10px 0px",
        }}
      >
        &copy;Copyright <b>ecerasystem</b>. All Rights Reserved
      </p> */}
    </div>
  );
}
