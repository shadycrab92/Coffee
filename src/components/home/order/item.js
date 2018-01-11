import React from "react";

const OrderItem = (props) => {
  return (
    <div className={`order__item`}>
      <div className={`order__itemLeft`}>
        <figure className="image is-64x64">
          <img src="https://bulma.io/images/placeholders/64x64.png" alt="Image"/>
        </figure>
      </div>
      <div className={`order__itemRight`}>
        <p className={`order__itemName`}>{props.name}</p>
        <p className={`order__itemText`}>{props.text}</p>
      </div>
    </div>
  );
};

export default OrderItem;
