import React, { useEffect, useState } from "react";
import ListItem from "./ListItem.js";
import { PopUp } from "./PopUp.js";

const List = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const storageItems = Object.values(localStorage).map((value) =>
      JSON.parse(value)
    );

    setItems(storageItems || []);
  }, []);

  return (
    <div>
      {items.length ?  <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Form Name</th>
            <th scope="col">Description</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Age</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ListItem withDetails  item={item} key={item.id} />
          ))}
        </tbody>
      </table> : <img src="./evam.png" />}
      <button
        className="btn btn-success m-2"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Add New Form
      </button>

      <PopUp />
    </div>
  );
};

export default List;
