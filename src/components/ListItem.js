import React from "react";

const ListItem = ({ item, withDetails }) => {
     
  const redirectToItem = () =>
    window.location.assign(`/forms/${item.id}`);
    
  return (
    <tr>
      <th scope="row"> {item.id} </th>
      <td> {item.formName} </td>
      <td> {item.description} </td>
      <td> {item.name} </td>
      <td> {item.surname} </td>
      <td> {item.age} </td>
      {withDetails && <td style={{cursor:"pointer"}} onClick={redirectToItem}> Details </td>}
    </tr>
  );
};

export default ListItem;
