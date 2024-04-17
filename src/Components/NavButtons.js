import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function NavButtons({
  activeStep,
  handleBack,
  handleNext,
  steps,
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <Button
        color="inherit"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{
          width: "100px",
          height: "50px",
          ":hover": {
            backgroundColor: "orange",
            color: "white",
          },
        }}
      >
        Back
      </Button>
      <Box sx={{ flex: "1 1 auto" }} />
      <Button
        sx={{
          background: "#ff6b6b",
          color: "white",
          width: "100px",
          height: "50px",
          "&:hover": {
            background: "#ff006e",
          },
        }}
        onClick={handleNext}
      >
        {activeStep === steps.length - 1 ? "Finish" : "Next"}
      </Button>
    </Box>
  );
}
