import React from "react";
import "./About.css";
import  bratislava from "../images/bratislava.jpg"

export default function About(){
return (
    <section className="about">
    <div className="col">
        <h2>Hey there! I'm Devina</h2>
    <p>I'm a Software Developer located in Seattle, Washington.</p>
    <p>As both an artist and a frequent traveler, I'm passionate about:</p>
    <ul>
      <li>Writing code that develops unique and creative things</li>
      <li>
        Lifelong learning and discovering new things about Web Developing.
      </li>
      <li>
        Exploring as much of the world as I can. Some of my favorite
        countries that I've visited include:
      </li>
      <ol>
        <li>Japan</li>
        <li>Switzerland</li>
        <li>Norway</li>
      </ol>
    </ul>
    <br />
    <p>
      Currently, I work at Whole Foods Market, but my passion has always been traveling.
      Last year I left for 3 months to travel through Europe and a couple of
      countries in Africa. While I was traveling, I created a travel blog to
      help inspire others, and I realized that I loved designing my own
      website.
    </p>
    <p>
      As a student for Thinkful, I have the opportunity to work in a field
      that gives me the flexibility to travel the world, while also doing
      work that I love.
    </p>
    <p>
      I'm always ready for a challenge! If you would like to collaborate,
      please contact me.
    </p>
  </div>
  <div className="col">
    <img src={bratislava} width="500" alt="Devina sitting atop a castle in Bratislava."/>
  </div>
  </section>
)
};