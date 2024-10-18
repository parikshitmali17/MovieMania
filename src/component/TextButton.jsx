import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function TextButton(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        style={{ color: "#f44336", fontWeight: "bold" }}
        onClick={props.onClick}
      >
        {props.name}
      </Button>
    </Stack>
  );
}
