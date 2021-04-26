import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="typography">
        Hey! My name is Oleg and I am a novice frontend developer. <br />
        <br />
        Current state of this barebones SPA may not be the best depiction of my
        current skillset, but rest assured, I will add all the most explicit
        solutions soon enough. I am currently getting code moved from a
        Material-UI based SPA to a fully self-written one, as it got too over
        the top and gets harder to follow with every other feature I am adding.
        <br />
        <br />
        Given the apps very basic state, you would better reach out to me
        through the means specified om the "Contacts" page and schedule a
        meeting or send me a test case.
      </p>
    </motion.div>
  );
}

export default About;
