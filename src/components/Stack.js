import React from "react";
import { motion } from "framer-motion";

function Stack() {
  // might want to create a separate component for list items
  return (
    <motion.div
      className="content direction-column"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="typography">
        My current stack is presented below. The component currently has icon
        placeholders and static text, which were previously fetched from a
        JSON-server through Axios, but it should do for now.
      </p>

      <div className="list direction-row">
        <div className="list-item">
          <div className="icon-placeholder"></div>
          <h4 className="list-item__title">HTML</h4>
          <h6 className="subtitle">Basic app structure building</h6>
        </div>
        <div className="list-item">
          <div className="icon-placeholder"></div>
          <h4 className="list-item__title">CSS</h4>
          <h6 className="subtitle">Presentation description and styling</h6>
        </div>
        <div className="list-item">
          <div className="icon-placeholder"></div>
          <h4 className="list-item__title">JavaScript (ES9+)</h4>
          <h6 className="subtitle">Heart and soul, logic and interactivity</h6>
        </div>
        <div className="list-item">
          <div className="icon-placeholder"></div>
          <h4 className="list-item__title">TypeScript</h4>
          <h6 className="subtitle">Static type definitions</h6>
        </div>
        <div className="list-item">
          <div className="icon-placeholder"></div>
          <h4 className="list-item__title">React v17+</h4>
          <h6 className="subtitle">
            Core library for building user interfaces
          </h6>
        </div>
        <div className="list-item">
          <div className="icon-placeholder"></div>
          <h4 className="list-item__title">Redux Tooolkit</h4>
          <h6 className="subtitle">App state management</h6>
        </div>
        <div className="list-item">
          <div className="icon-placeholder"></div>
          <h4 className="list-item__title">Material-UI</h4>
          <h6 className="subtitle">
            React components' in Google's Material Design
          </h6>
        </div>
        <div className="list-item">
          <div className="icon-placeholder"></div>
          <h4 className="list-item__title">Framer-Motion</h4>
          <h6 className="subtitle">Animations and transitions</h6>
        </div>
        <div className="list-item">
          <div className="icon-placeholder"></div>
          <h4 className="list-item__title">JEST</h4>
          <h6 className="subtitle">
            Code testing in its delightful simplicity
          </h6>
        </div>
        <div className="list-item">
          <div className="icon-placeholder"></div>
          <h4 className="list-item__title">Axios</h4>
          <h6 className="subtitle">Promise based HTTP client</h6>
        </div>
        <div className="list-item">
          <div className="icon-placeholder"></div>
          <h4 className="list-item__title">Formik</h4>
          <h6 className="subtitle">Simple form building and hadling</h6>
        </div>
        <div className="list-item">
          <div className="icon-placeholder"></div>
          <h4 className="list-item__title">Storybook</h4>
          <h6 className="subtitle">UI components' organizing</h6>
        </div>
      </div>
    </motion.div>
  );
}

export default Stack;
