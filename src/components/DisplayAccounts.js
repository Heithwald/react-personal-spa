import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DisplayAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = () => {
    axios
      .get("http://localhost:8000/test")
      .then((response) => {
        setAccounts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteAccount = (id) => {
    axios.delete(`http://localhost:8000/test/${id}`);
  };

  useEffect(fetchAccounts, []);
  // specifying 'accounts' as a dependency allows for an automatic update of a list of records, BUT: it becomes an infinite loop of requests + it is suboptimal for the performance reasons

  return (
    // #FIX Abstract to a separate list-renderer component
    <AnimatePresence>
      <div className="content">
        <table className="account-table">
          <thead className="account-table__header">
            <tr className="account-table__row">
              <th>#</th>
              <th>Name</th>
              <th>Last name</th>
              <th>Gender</th>
              <th>City</th>
              <th>E-mail</th>
              <th>
                <button className="refresh-button" onClick={fetchAccounts}>
                  Refresh list
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {accounts.map((account) => (
                <motion.tr
                  key={account.id}
                  className="account-table__row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <td>{`${account.id}. `}</td>
                  <td>{account.name}</td>
                  <td>{account.lastName}</td>
                  <td>{account.gender}</td>
                  <td>{account.city}</td>
                  <td>{account.email}</td>
                  <td>
                    {/* add a prompt: yes/>no for delete <--------------------------------------------------------*/}
                    <button
                      className="delete-record-button"
                      onClick={() => {
                        axios
                          .delete(`http://localhost:8000/test/${account.id}`)
                          .then(fetchAccounts);
                      }}
                    >
                      Delete record
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </AnimatePresence>
  );
};

export default DisplayAccounts;
