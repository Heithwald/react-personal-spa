import React from "react";
import { motion } from "framer-motion";

// Component imports
import YouTubeForm from "./YouTubeForm";
import DisplayAccounts from "./DisplayAccounts";

function Projects() {
  return (
    <motion.div
      className="content direction-column"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="typography">
        Here is an growning list of components, demonstrating the solutions I am
        able to implement.
      </p>
      <YouTubeForm />
      <DisplayAccounts />
    </motion.div>
  );
}

export default Projects;
