import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

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
                <button className="record-button" onClick={fetchAccounts}>
                  Refresh list
                </button>
                {/* #FIX does not take the full width */}
              </th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.id} className="account-table__row">
                <td>{`${account.id}. `}</td>
                <td>{account.name}</td>
                <td>{account.lastName}</td>
                <td>{account.gender}</td>
                <td>{account.city}</td>
                <td>{account.email}</td>
                <td>
                  <button className="record-button">Delete record</button>{" "}
                  {/* implement the delete function */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AnimatePresence>
  );
};

/*
<AnimatePresence>
        {accounts.map((account) => (
          <p key={account.id} className="account-record">
            {JSON.stringify(account, null, " ")}
          </p>
        ))}
      </AnimatePresence>
*/

export default DisplayAccounts;
