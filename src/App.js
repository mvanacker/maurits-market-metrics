import React from "react";
import "./App.css";

import { Button } from "@material-ui/core";

export default () => {
  return (
    <div className="hello-world-container">
      <Button variant="contained" color="primary">
        Hello, world!
      </Button>
    </div>
  );
};
