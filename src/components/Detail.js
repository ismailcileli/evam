import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ListItem from "./ListItem";

const Detail = (props) => {
  const params = useParams();

  const [form, setForm] = useState({});
  useEffect(() => {
    setForm(JSON.parse(localStorage.getItem(params.id)));
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Form Name</th>
            <th scope="col">Description</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>{form && <ListItem item={form} />}</tbody>
      </table>
      <button className="btn btn-primary mt-2" onClick={()=> window.location.href="/"}>Home Page</button>
    </div>
  );
};

export default Detail;
