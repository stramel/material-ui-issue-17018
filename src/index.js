import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import useForm from "react-hook-form";

import "./index.css";
import { TextField } from "@material-ui/core";

function App() {
  const { register, setValue } = useForm({
    defaultValues: {
      inputField: "testing"
    }
  });

  useEffect(() => {
    setValue("inputField", "Test text");
  }, []);

  return (
    <div className="App">
      <TextField
        style={{
          width: "200px"
        }}
        name="inputField"
        inputRef={register}
        label="Label Text"
        inputProps={{
          "aria-label": "Description"
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
