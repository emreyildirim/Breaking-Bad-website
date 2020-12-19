import React from 'react';
import TypeIt from "typeit-react";
import '../../styles/typeit.css';
const LandingText = () => {
    return (
        <TypeIt
        class="typeit"
        getBeforeInit={(instance) => {
          instance
            .pause(350)
            .type("I AM NOT IN DANGER", { delay: 500 })
            .pause(750)
            .move(-7)
            .delete(6, { delay: 400 })
            .pause(400)
            .type("<span class='the'>THE</span>")
            .move(7)
            .type("! ")
          return instance;
  
        }}
      ></TypeIt>
    )
}

export default LandingText
