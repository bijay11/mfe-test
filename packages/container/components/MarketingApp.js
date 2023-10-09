import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

export default () => {
  const ref = useRef(null);

  console.log("test ref 33", ref);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
