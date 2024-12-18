// import React, { Component } from "react";

// // Complete this Component
// const ListItem = (props) => {
//   console.log(props);
//   const {id, name, link, icon, bgColor} = props;
//   return (
//     <div
//       className="ListItem"
//       style={{
//         height: 30,
//         bgColor
//       }}
//     >
//       <img src={icon} alt="" />
//       <a href={link}>{name}</a>
//     </div>
//   );
// };

// export default ListItem;


import React from "react";

// Complete this Component
const ListItem = (props) => {
  // console.log(props);
  const { name, link, icon, bgColor } = props.item;
  console.log(name, link, icon, bgColor);

  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor, // Fixed key name
      }}
    >
      <img src={icon} alt={`${name} icon`} /> {/* Fixed variable name */}
      <a href={link}>{name}</a> {/* Added content inside <a> */}
    </div>
  );
};

export default ListItem;
