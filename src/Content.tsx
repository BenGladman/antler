import { useTransition, a, config } from "@react-spring/web";
import React from "react";
import { useBeatLevel, useShowInfo } from "./beat";

const MAP_LINK =
  "https://www.google.com/maps/place/Shoreditch+Studios+Ltd./@51.5252832,-0.0788779,15z/data=!4m5!3m4!1s0x0:0x2fde7a00c9db6f52!8m2!3d51.5252832!4d-0.0788779";

function Ceremony() {
  return (
    <>
      <h1>Alan &amp; Ben</h1>
      <p>
        are&nbsp;getting&nbsp;married
        <br />
        on&nbsp;Saturday&nbsp;30th&nbsp;October
        at&nbsp;3&nbsp;o’clock&nbsp;in&nbsp;the&nbsp;afternoon
        <br />
        at&nbsp;
        <a href={MAP_LINK} target="_blank" rel="noreferrer">
          Shoreditch&nbsp;Studios&nbsp;EC2A
        </a>
      </p>
    </>
  );
}

function Info() {
  return (
    <>
      <p>
        Gifts — TODO
        <br />
        Contact <a href="mailto:ben.gladman@gmail.com">ben.gladman@gmail.com</a>
        <br />
        <a href="credits.html">Site credits</a>
      </p>
    </>
  );
}

function Schedule() {
  return (
    <>
      <p>
        Canapes and drinks — 4pm
        <br />
        Dinner — 5pm
        <br />
        DJ and dancing — until close at midnight
      </p>
    </>
  );
}

export function Content() {
  const Content = useBeatLevel([Ceremony, Info, Schedule]);
  const showInfo = useShowInfo();

  const transition = useTransition(showInfo && Content, {
    key: (item) => (item ? item.name : "null"),
    from: { transform: "translate3d(0,-50vh,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0vh,0)", opacity: 1 },
    leave: { transform: "translate3d(0,20vh,0)", opacity: 0 },
    config: config.slow,
  });

  return transition(
    (style, Component) =>
      Component && (
        <a.article style={style}>
          <Component />
        </a.article>
      )
  );
}
