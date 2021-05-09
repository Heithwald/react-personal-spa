import React from "react";

const AccountTable = (props) => {
  return (
    <table className="account-table">
      <tr className="account-table__header">
        <th>#</th>
        <th>Name</th>
        <th>Last name</th>
        <th>Gender</th>
        <th>City</th>
        <th>E-mail</th>
      </tr>
      {props.map((prop) => {
        return (
          <tr className="account-table__row">
            <td>{`${prop.id}. `}</td>
            <td>{prop.name}</td>
            <td>{prop.lastName}</td>
            <td>{prop.gender}</td>
            <td>{prop.city}</td>
            <td>{prop.email}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default AccountTable;
