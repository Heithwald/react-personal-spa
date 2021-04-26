import React from "react";
import { motion } from "framer-motion";

function Contacts() {
  return (
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contacts direction-column">
        <div className="contacts-item size-l">
          <div className="icon-placeholder"></div>
          <h4 className="title">
            <a className="link" href="tel:+79851860584">
              +79851860584
            </a>
          </h4>
          <h6 className="subtitle">
            I am available from 8:00 to 22:00 (Moscow time)
          </h6>
          <h6 className="subtitle"></h6>
        </div>
        <div className="contacts-item size-l">
          <div className="icon-placeholder"></div>
          <h4 className="title">
            <a className="link" href="mailto:tsymbalenko.o@gmail.com">
              tsymbalenko.o@gmail.com
            </a>
          </h4>
          <h6 className="subtitle">
            Feel free to send me an e-mail at any time
          </h6>
        </div>
      </div>
    </motion.div>
  );
}

export default Contacts;
