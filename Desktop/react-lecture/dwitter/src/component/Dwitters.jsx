import React from "react";

const Dwitters = (props) => {
  return (
    <div>
      <div className="dwitter">
        <div className="image">
          <img src={props.image} alt="" />
        </div>
        <div className="title">
          <div className="profile">
            <span>{props.name}</span>
            <span>{props.id}</span>
            <span>{props.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dwitters;
