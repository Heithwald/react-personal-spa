import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h4 className="title">Currently under construction</h4>
    </motion.div>
  );
}

export default Projects;
