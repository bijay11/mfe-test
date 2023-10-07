import React from "react";
import ReactDOM from "react-dom";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<h1>Hi There!</h1>, el);
};

// Call mount immediately if in dev and isolation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// just export
export { mount };
