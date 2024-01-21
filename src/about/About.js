import React from "react";
import "./About.css";
import  profile from "../images/profile-image.jpg"

export default function About(){
return (
    <section className="about">
    <div className="col about-me">
        <h2>Hey there! I'm Devina</h2>
        <b>
    <p>I'm a Software Developer located in Seattle, Washington.</p>
    <p>As both an artist and a frequent traveler, I'm passionate about writing code that develops unique and creative things.</p>
    <p>I'm also exploring as much of the world as I can. Some of my favorite countries that I've visited include Japan, Switzerland, and Norway.</p>
    <p>
      Currently, I work at Whole Foods Market, but my passion has always been traveling.
      Last year I left for 3 months to travel through Europe and a couple of
      countries in Africa. While I was traveling, I created a travel blog to
      help inspire others, and I realized that I loved designing my own
      website.
    </p>
    <p>
      As a Full-Stack Software Engineer, I have the opportunity to work in a field
      that gives me the flexibility to travel the world, while also doing
      work that I love. Technologies that I've used include: JavaScript, React, CSS, HTML, Node.JS, Express, SQL and PostgreSQL.
    </p>
    <p>
      I'm always ready for a challenge! If you would like to collaborate,
      please contact me.
    </p>
    </b>
  </div>
  <div className="col">
    <img src={profile} width="500" alt="Devina sitting atop a castle in Bratislava."/>
    <p style={{"font-size":16}}>Devina in Tromso, Norway</p>
  </div>
  </section>
)
};