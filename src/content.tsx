import React from "react";

const MAP_LINK =
  "https://www.google.com/maps/place/Shoreditch+Studios+Ltd./@51.5252832,-0.0788779,15z/data=!4m5!3m4!1s0x0:0x2fde7a00c9db6f52!8m2!3d51.5252832!4d-0.0788779";

export function Ceremony() {
  return (
    <article>
      <h1>Alan &amp; Ben</h1>
      <p>
        are getting married on&nbsp;Saturday&nbsp;30th&nbsp;October
        at&nbsp;3&nbsp;o’clock in&nbsp;the&nbsp;afternoon
      </p>
      <p>
        at <a href={MAP_LINK}>Shoreditch Studios EC2A</a>
      </p>
    </article>
  );
}

export function Dinner() {
  return (
    <article>
      <p>4pm canapes and drinks</p>
      <p>5pm dinner</p>
    </article>
  );
}

export function Dancing() {
  return (
    <article>
      <h1>DJ and dancing</h1>
      <p>until close at midnight</p>
    </article>
  );
}
