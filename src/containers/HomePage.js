import React from "react";

import Map from "components/home/map/index";
import Order from "components/home/order/index";

const HomePage = () => {
  return (
      <div className="homePage">
        <Map/>
        <Order/>
      </div>
  );
};

export default HomePage;
